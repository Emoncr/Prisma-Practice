import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export const POST = async (req, res) => {
  try {
    const reqData = await req.json();
    const prisma = new PrismaClient();
    const dbData = await prisma.User.create({
      data: reqData,
    });

    return NextResponse.json({ status: "success", data: dbData });
  } catch (error) {
    return NextResponse.json({ status: "failed" });
  }
};
