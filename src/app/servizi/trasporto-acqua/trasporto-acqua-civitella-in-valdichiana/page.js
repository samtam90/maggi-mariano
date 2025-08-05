import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Civitella in Valdichiana",
  canonical: links.servizi["trasporto-acqua"]["civitella-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Civitella in Valdichiana", 
    locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
