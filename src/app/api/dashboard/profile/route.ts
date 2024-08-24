import { NextResponse } from "next/server";
import { authenticateRoute } from "@/lib/auth";
import { generateResponse } from "@/lib/utils";
import { Request } from "@/interfaces/types";
import Database from "@/lib/database";
import User from "@/models/user";

Database.connect();

export const GET = authenticateRoute(async (request: Request) => {
    const user = await User.findById(request?.user?._id).select("-password");
    return NextResponse.json(generateResponse({ success: true, message: "User sent successfully!", data: user }), {
        status: 200,
    });
});
