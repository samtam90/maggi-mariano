import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Montone",
  canonical: links.servizi["trasporto-acqua"]["montone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montone", 
    locationNames: {label: "Montone", href: "montone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
