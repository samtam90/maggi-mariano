import { NextRequest, NextResponse, userAgent } from "next/server";

/**
 * @param {NextRequest} request
 * @returns
 */
export default function middleware(request) {
  const url = request.nextUrl;
  const { device, isBot } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  url.searchParams.set("viewport", viewport);
  url.searchParams.set("isBot", isBot ? "true" : "false");
  return NextResponse.rewrite(url);
}
