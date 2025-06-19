import { NextRequest, NextResponse, userAgent } from "next/server";

/**
 * @param {NextRequest} request
 * @returns
 */
export default function middleware(request) {
  const url = request.nextUrl;
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  url.searchParams.set("viewport", viewport);
  return NextResponse.rewrite(url);
}
