const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

const POST = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get("id"));
  try {
    const prisma = new PrismaClient();
    const result = prisma.User.update({});




    
  } catch (error) {
    return NextResponse.json(error);
  }
};
