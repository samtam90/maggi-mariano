import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Potenza",
  canonical: links.servizi["trasporto-rifiuti"]["potenza"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Potenza", 
    locationNames: {label: "Potenza", href: "potenza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["potenza"],
      name: "Potenza",
  }),
});
