import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Valfabbrica",
  canonical: links.servizi["trasporto-rifiuti"]["valfabbrica"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
