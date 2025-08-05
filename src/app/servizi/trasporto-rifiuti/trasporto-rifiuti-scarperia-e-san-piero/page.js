import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Scarperia e San Piero",
  canonical: links.servizi["trasporto-rifiuti"]["scarperia-e-san-piero"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Scarperia e San Piero", 
    locationNames: {label: "Scarperia e San Piero", href: "scarperia-e-san-piero"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
