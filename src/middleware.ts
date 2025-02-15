import { NextResponse } from "next/server";
import { authPaths, pathnames } from "./lib/constants";
import { NextRequest } from "next/server";
import { isVerifiedUser } from "./lib/auth";

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const isAuthPath = Object.values(authPaths).includes(pathname);

    if (isAuthPath && !isVerifiedUser()) {
        return NextResponse.redirect(new URL(pathnames.FEED, request.url));
    } else if (!isAuthPath && !isVerifiedUser()) {
        return NextResponse.redirect(new URL(authPaths.SIGNIN, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
