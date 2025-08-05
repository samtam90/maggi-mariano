import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gubbio",
  canonical: links.servizi["trasporto-rifiuti"]["gubbio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
