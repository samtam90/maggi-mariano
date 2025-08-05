import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Grosseto",
  canonical: links.servizi["centrifugazione-fanghi"]["grosseto"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Grosseto",
  locationNames: { label: "Grosseto", href: "grosseto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["grosseto"],
      name: "Grosseto",
  }),
});
