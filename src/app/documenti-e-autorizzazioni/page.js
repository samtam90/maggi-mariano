import { withConditionalRendering } from "@/misc/functions";

const props = {};

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/Documents/alt/mobile"),
  Desktop: import("@/templates/Documents/alt/desktop"),
});

export default function Page({ searchParams }) {
  return <ConditionalPage searchParams={searchParams} {...props} />;
}
