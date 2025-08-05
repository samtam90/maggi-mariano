import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vallo di Nera",
  canonical: links.servizi["trasporto-rifiuti"]["vallo-di-nera"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
