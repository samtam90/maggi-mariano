import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lisciano Niccone",
  canonical: links.servizi["trasporto-rifiuti"]["lisciano-niccone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lisciano Niccone", 
    locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
