import { jwtVerify, errors } from "jose";
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { SECRET_KEY, authPaths, pathnames } from './lib/constants';
import type { NextRequest } from 'next/server'



export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const token = cookies().get("next.authentication.token")?.value;
    const isAuthUrl = Object.values(authPaths).includes(pathname);

    if (!isAuthUrl && !token) {
        return NextResponse.redirect(new URL(authPaths.SIGNIN, request.url));
    }
    else if (token) {

        if (isAuthUrl) {
            return NextResponse.redirect(new URL(pathnames.DASHBOARD, request.url));
        } else {

            try {
                const decodedToken = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));

                if (!decodedToken?.payload.user) {
                    return NextResponse.redirect(new URL(authPaths.SIGNIN, request.url));
                }

            } catch (error) {
                console.error("Error verifying JWT:", error);
            }
        }
    }

    return NextResponse.next();

}


export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}