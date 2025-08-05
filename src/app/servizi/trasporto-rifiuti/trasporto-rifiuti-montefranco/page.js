import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montefranco",
  canonical: links.servizi["trasporto-rifiuti"]["montefranco"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montefranco", 
    locationNames: {label: "Montefranco", href: "montefranco"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
