import { withConditionalRendering } from "@/misc/functions";

const props = {};

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/Contacts/alt/mobile"),
  Desktop: import("@/templates/Contacts/alt/desktop"),
});

export default function Page({ searchParams }) {
  return <ConditionalPage searchParams={searchParams} {...props} />;
}
