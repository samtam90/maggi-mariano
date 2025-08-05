import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Torino",
  canonical: links.servizi["trasporto-acqua"]["torino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Torino", 
    locationNames: {label: "Torino", href: "torino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["torino"],
      name: "Torino",
  }),
});
