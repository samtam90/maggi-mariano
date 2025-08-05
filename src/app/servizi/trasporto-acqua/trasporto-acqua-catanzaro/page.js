import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Catanzaro",
  canonical: links.servizi["trasporto-acqua"]["catanzaro"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["catanzaro"],
      name: "Catanzaro",
  }),
});
