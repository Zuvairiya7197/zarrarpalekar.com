import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message: "Please complete all fields before sending your inquiry.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 600));

    return NextResponse.json({
      message: "Thanks for reaching out. Your message has been received successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        message: "Unable to process the request right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
