import { SVGProps } from "react";

export function Testimonial() {
  return (
    <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <blockquote className="text-center lg:mx-auto lg:w-3/5">
        <GitHub className="mx-auto w-20 h-auto sm:w-28 dark:invert" />

        <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium">
          <svg
            className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-muted sm:h-24 sm:w-24"
            width={16}
            height={13}
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
              fill="currentColor"
            />
          </svg>

          <span className="relative z-10">
            Timely has revolutionized my scheduling. It&#39;s incredibly fast and intuitive, making meeting management a breeze. Highly recommend!
          </span>
        </p>

        <footer className="mt-6">
          <p className="font-semibold">Shubham Yeram</p>
          <p className="text-sm text-muted-foreground">Software Developer | Full Stack Developer</p>
        </footer>
      </blockquote>
    </div>
  );
}

const GitHub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 512c0 223.8 145.1 413.3 346.3 480.2 25.3 4.7 34.5-11 34.5-24.4 0-12.1-.5-52.2-.7-94.7-141 30.7-170.7-60.3-170.7-60.3-23-58.5-56.1-74.1-56.1-74.1-45.9-31.4 3.5-30.8 3.5-30.8 50.7 3.6 77.4 52.1 77.4 52.1 45 77.3 118.1 55 146.8 42 4.6-32.6 17.6-55 31.9-67.6-112.6-12.8-231-56.3-231-250.5 0-55.3 19.7-100.4 52-135.8-5.3-12.8-22.5-64.4 4.9-134.4 0 0 42.3-13.6 138.5 51.9 40.2-11.2 83.2-16.8 126-17 42.7.2 85.8 5.8 126 17 96-65.5 138.2-51.9 138.2-51.9 27.5 70 10.3 121.6 5 134.4 32.3 35.4 51.8 80.5 51.8 135.8 0 194.7-118.6 237.6-231.5 250.1 18.2 15.7 34.3 46.8 34.3 94.3 0 68.1-.6 122.8-.6 139.6 0 13.5 8.8 29.3 34.8 24.4C870.9 925.3 1024 735.8 1024 512 1024 229 795 0 512 0S0 229 0 512z"
      fill="currentColor"
      className="dark:invert"
    />
  </svg>
);
