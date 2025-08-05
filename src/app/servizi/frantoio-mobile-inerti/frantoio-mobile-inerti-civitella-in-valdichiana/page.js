import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Civitella in Valdichiana",
  canonical: links.servizi["frantoio-mobile-inerti"]["civitella-in-valdichiana"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Civitella in Valdichiana",
  locationNames: { label: "Civitella in Valdichiana", href: "civitella-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
