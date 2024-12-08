import prisma from "@/app/lib/db";
import { requireUser } from "@/app/lib/hooks";
import { nylas, nylasConfig } from "@/app/lib/nylas";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const session = await requireUser();
    const url = new URL(req.url)
    const code = url.searchParams.get('code');

    if(!code){
        return NextResponse.json({ message: 'No authorization code returned from Nylas'});  
    }

    try {
        const response = await nylas.auth.exchangeCodeForToken({
            clientSecret: nylasConfig.apiKey,
            clientId: nylasConfig.clientId,
            redirectUri: nylasConfig.redirectUri,
            code: code
        });

        const { grantId, email } = response;

        await prisma.user.update({
            where: {
                id: session.user?.id
            },
            data: {
                grantId: grantId,
                grantEmail: email,
            }
        })

    }catch(err){
        console.log("Error something went wrong", err);
    }

    redirect('/dashboard');

}