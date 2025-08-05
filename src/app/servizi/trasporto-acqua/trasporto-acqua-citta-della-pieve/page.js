import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Città della Pieve",
  canonical: links.servizi["trasporto-acqua"]["citta-della-pieve"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Città della Pieve", 
    locationNames: {label: "Città della Pieve", href: "citta-della-pieve"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
