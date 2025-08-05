import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Città della Pieve",
  canonical: links.servizi["trasporto-rifiuti"]["città-della-pieve"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Città della Pieve", 
    locationNames: {label: "Città della Pieve", href: "città-della-pieve"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
