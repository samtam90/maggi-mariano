import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Grosseto",
  canonical: links.servizi["disidratazione-fanghi"]["grosseto"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Grosseto",
  locationNames: { label: "Grosseto", href: "grosseto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["grosseto"],
      name: "Grosseto",
  }),
});
