import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    // let reqBody = await req.json();
    // console.log(reqBody);
    // const prisma = new PrismaClient();

    // const result = await prisma.users.create({
    //   data: reqBody,
    // });

    const reqData = await req.json();
    const prisma = new PrismaClient();
    const dbData = await prisma.Users.create({
      data: reqData,
    });

    return NextResponse.json({ status: "success", data: dbData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}
