import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montepulciano",
  canonical: links.servizi["trasporto-rifiuti"]["montepulciano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montepulciano", 
    locationNames: {label: "Montepulciano", href: "montepulciano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
