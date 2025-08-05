import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Udine",
  canonical: links.servizi["trasporto-acqua"]["udine"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Udine", 
    locationNames: {label: "Udine", href: "udine"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["udine"],
      name: "Udine",
  }),
});
