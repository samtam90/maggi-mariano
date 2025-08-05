import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Guardea",
  canonical: links.servizi["trasporto-rifiuti"]["guardea"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Guardea", 
    locationNames: {label: "Guardea", href: "guardea"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
