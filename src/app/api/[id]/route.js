// app/api/[id]/route.js 
import { NextResponse } from "next/server";
import { prisma } from "@/app/neondb/prisma";

const data = [];

export async function GET() {
    const users = await prisma.user.findMany()
// displays users from neon
    return NextResponse.json({users});
}

export async function POST(req) {
    const body = await req.json();
    console.log(body);
    await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    });
    return NextResponse.json({ body });
}