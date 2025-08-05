import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Lisciano Niccone",
  canonical: links.servizi["trasporto-acqua"]["lisciano-niccone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lisciano Niccone", 
    locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
