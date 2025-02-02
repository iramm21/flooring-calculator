import { NextResponse } from "next/server";

export async function POST() {
  try {
    // To log out, you typically clear the JWT token or cookie
    // Here we'll just return a success message
    return NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
