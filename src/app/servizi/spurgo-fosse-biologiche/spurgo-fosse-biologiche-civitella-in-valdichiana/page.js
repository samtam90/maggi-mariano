import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Civitella in Valdichiana",
  canonical: links.servizi["spurgo-fosse-biologiche"]["civitella-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Civitella in Valdichiana", 
    locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
