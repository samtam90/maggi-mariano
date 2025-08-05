import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Civitella in Valdichiana",
  canonical: links.servizi["pulizia-fognature"]["civitella-in-valdichiana"],
});
export default withBaseProps({
  title: "Pulizia fognature Civitella in Valdichiana",
  locationNames: { label: "Civitella in Valdichiana", href: "civitella-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
