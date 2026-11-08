import { connection } from "next/server";

// Opt out of prerendering so every request is answered live by the server.
export async function GET() {
  await connection();
  return Response.json({ status: "ok", time: new Date().toISOString() });
}
