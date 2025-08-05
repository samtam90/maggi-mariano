import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Civitella in Valdichiana",
  canonical: links.servizi["disidratazione-fanghi"]["civitella-in-valdichiana"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Civitella in Valdichiana",
  locationNames: { label: "Civitella in Valdichiana", href: "civitella-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
