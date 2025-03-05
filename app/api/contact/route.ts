import { Client } from "pg";
import { NextRequest, NextResponse } from "next/server";

const dbConfig = {
  connectionString: process.env.POSTGRES_URL,
  ssl: false,
};

export async function POST(req: NextRequest) {
  const client = new Client(dbConfig);

  try {
    await client.connect();

    const formData = await req.json();

    await client.query(
      "INSERT INTO form_submissions (name, organization, ideas, budget, filter_reason, other_reason, contact_info) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        formData.name,
        formData.organization,
        formData.ideas,
        formData.budget,
        formData.filterReason,
        formData.otherReason,
        formData.contactInfo,
      ]
    );

    return NextResponse.json(
      { message: "Form submission success" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
