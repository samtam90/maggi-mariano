import { withConditionalRendering } from "@/misc/functions";

const props = {};

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/VideoGallery/alt/mobile"),
  Desktop: import("@/templates/VideoGallery/alt/desktop"),
});

export default function Page({ searchParams }) {
  return <ConditionalPage searchParams={searchParams} {...props} />;
}
