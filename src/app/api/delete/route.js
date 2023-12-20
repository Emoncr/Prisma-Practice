import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    // const reqBody = await req.json();

    const prisma = new PrismaClient();

    const result = await prisma.User.create({
      data: {
        email: "emohghgh@gmail.com",
        profile: {
          create: {
            firstName: "demo first name",
            lastName: "demo last name",
            phone: "demo phonghge",
            city: "dhaka bangladesh",
          },
        },
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json(error);
  }
}
