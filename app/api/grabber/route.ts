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

    const grabData = await req.json();

    await client.query(
      "INSERT INTO grabber (ipaddress, browser, useragent, deviceinfo, visited_at) VALUES ($1, $2, $3, $4, $5)",
      [
        grabData.ipaddress,
        grabData.browser,
        grabData.useragent,
        grabData.deviceinfo,
        grabData.visited_at,
      ]
    );

    return NextResponse.json({ message: "Grabbed" }, { status: 200 });
  } catch (error) {
    console.error("Error grabbing:", error);
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
