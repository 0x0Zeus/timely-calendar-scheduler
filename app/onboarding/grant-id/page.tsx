import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VideoGif from '@/public/work-is-almost-over-happy.gif';
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck2 } from 'lucide-react';

export default function OnboardingRouteTwo(){
    return (
       <div className="min-h-screen w-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>You are almost Done!</CardTitle>
                    <CardDescription>We have to now connect your calander to your account</CardDescription>
                    <Image src={VideoGif} alt="Almost finised gif" className="w-full rounded-lg"  />
                </CardHeader>
                <CardContent>
                    <Button asChild className="w-full">
                        <Link href={'/api/auth'}>
                            <CalendarCheck2 className="size-4 mr-2" />
                            Connect Calander to your Account
                        </Link>
                    </Button>
                </CardContent>
            </Card>
       </div>
    )
}   