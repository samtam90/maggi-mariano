import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Civitella in Valdichiana",
  canonical: links.servizi["trasporto-rifiuti"]["civitella-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Civitella in Valdichiana", 
    locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
