import { NextResponse } from "next/server";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();


// GET /api/user/[id] - Get User Info by ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id: Number(id) }, // Ensure the id is treated as a number if that's the model type
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(
    { ...user, password: user.password }, // Include password in the response (hashed)
    { status: 200 }
  );
}

// PATCH /api/user/[id] - Update User Info by ID
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const body = await req.json();

  // Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { id: Number(id) }, // Ensure the id is treated as a number if that's the model type
  });

  if (!existingUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // Update user info
  const updatedUser: User = await prisma.user.update({
    where: { id: Number(id) }, // Ensure the id is treated as a number if that's the model type
    data: { ...body },
  });

  return NextResponse.json(
    { ...updatedUser, password: updatedUser.password }, // Include password in the response (hashed)
    { status: 200 }
  );
}

// DELETE /api/user/[id] - Delete User by ID
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  // Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { id: Number(id) }, // Ensure the id is treated as a number if that's the model type
  });

  if (!existingUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // Delete user
  await prisma.user.delete({
    where: { id: Number(id) }, // Ensure the id is treated as a number if that's the model type
  });

  return NextResponse.json(
    { message: "User deleted successfully" },
    { status: 200 }
  );
}
