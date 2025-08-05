import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Catanzaro",
  canonical: links.servizi["trasporto-rifiuti"]["catanzaro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["catanzaro"],
      name: "Catanzaro",
  }),
});
