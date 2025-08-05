import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Salerno",
  canonical: links.servizi["trasporto-rifiuti"]["salerno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Salerno", 
    locationNames: {label: "Salerno", href: "salerno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["salerno"],
      name: "Salerno",
  }),
});
