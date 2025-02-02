import { NextResponse } from "next/server";
import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcryptjs";
import Joi from "joi";

const prisma = new PrismaClient();

// Joi schema to validate the input data
const schema = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().min(3).required(),
  phone: Joi.string().min(10).required(),
  address: Joi.string().min(5).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string()
    .valid("user", "admin", "editor")
    .default("user")
    .required(), // Accept role and validate
});

// POST /api/user - Register User
export async function POST(req: Request) {
  const body = await req.json();

  const { error } = schema.validate(body);
  if (error) {
    return NextResponse.json(
      { message: error.details[0].message },
      { status: 400 }
    );
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: body.email },
  });
  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 409 }
    );
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(body.password, 10);

  // Create new user
  const user: User = await prisma.user.create({
    data: { ...body, password: hashedPassword },
  });

  return NextResponse.json(
    { ...user, password: hashedPassword },
    { status: 201 }
  );
}
