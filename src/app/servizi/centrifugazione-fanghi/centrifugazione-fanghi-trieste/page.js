import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Trieste",
  canonical: links.servizi["centrifugazione-fanghi"]["trieste"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Trieste",
  locationNames: { label: "Trieste", href: "trieste" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["trieste"],
      name: "Trieste",
  }),
});
