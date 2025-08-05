import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Torino",
  canonical: links.servizi["trasporto-rifiuti"]["torino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Torino", 
    locationNames: {label: "Torino", href: "torino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["torino"],
      name: "Torino",
  }),
});
