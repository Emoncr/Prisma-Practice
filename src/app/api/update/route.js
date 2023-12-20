const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

export const POST = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get("id"));
  const reqBody = await req.json();

  try {
    const prisma = new PrismaClient();
    const result = await prisma.User.update({
      where: { id },
      data: {
        email: reqBody.email,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json(error);
  }
};
