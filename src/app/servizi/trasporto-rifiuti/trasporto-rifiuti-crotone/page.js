import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Crotone",
  canonical: links.servizi["trasporto-rifiuti"]["crotone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Crotone", 
    locationNames: {label: "Crotone", href: "crotone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["crotone"],
      name: "Crotone",
  }),
});
