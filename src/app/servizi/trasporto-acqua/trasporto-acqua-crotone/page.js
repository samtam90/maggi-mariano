import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Crotone",
  canonical: links.servizi["trasporto-acqua"]["crotone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Crotone", 
    locationNames: {label: "Crotone", href: "crotone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["crotone"],
      name: "Crotone",
  }),
});
