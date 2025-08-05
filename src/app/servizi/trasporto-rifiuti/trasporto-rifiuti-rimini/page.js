import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rimini",
  canonical: links.servizi["trasporto-rifiuti"]["rimini"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rimini", 
    locationNames: {label: "Rimini", href: "rimini"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["rimini"],
      name: "Rimini",
  }),
});
