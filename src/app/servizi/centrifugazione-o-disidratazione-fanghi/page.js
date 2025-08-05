import { withConditionalRendering } from "@/misc/functions";
import { links } from "../../../../app.config";
import HighlightedText from "@/components/HighlightedText";
import { getBaseProps, getMetadata } from "../centrifugazione-fanghi/page";

export const metadata = getMetadata({
  title: "Centrifugazione o disidratazione fanghi",
  canonicalLink: links.servizi["centrifugazione-o-disidratazione-fanghi"],
});

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
});

export { HighlightedText };
export default function Page({ searchParams }) {
  const mobile = searchParams?.viewport === "mobile";
  return (
    <ConditionalPage
      {...getBaseProps({
        mobile,
        title: "Centrifugazione o disidratazione fanghi",
      })}
      searchParams={searchParams}
    />
  );
}
