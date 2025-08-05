import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Rimini",
  canonical: links.servizi["trasporto-acqua"]["rimini"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rimini", 
    locationNames: {label: "Rimini", href: "rimini"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["rimini"],
      name: "Rimini",
  }),
});
