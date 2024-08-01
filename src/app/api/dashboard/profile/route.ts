import { NextResponse } from "next/server";
import { authorizeUser, generateResponse } from "@/lib/utils";
import { Request } from "@/interfaces/dto";
import User from "@/models/user";

export const GET = authorizeUser(async (request: Request) => {
    const user = await User.findById(request?.user?._id).select("-password");
    return NextResponse.json(generateResponse({ success: false, message: "User sent successfully!", data: user }), {
        status: 200,
    });
});
