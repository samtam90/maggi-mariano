import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ferentillo",
  canonical: links.servizi["trasporto-rifiuti"]["ferentillo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ferentillo", 
    locationNames: {label: "Ferentillo", href: "ferentillo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
