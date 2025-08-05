import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Lecce",
  canonical: links.servizi["trasporto-acqua"]["lecce"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lecce", 
    locationNames: {label: "Lecce", href: "lecce"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["lecce"],
      name: "Lecce",
  }),
});
