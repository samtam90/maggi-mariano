import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lecce",
  canonical: links.servizi["trasporto-rifiuti"]["lecce"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lecce", 
    locationNames: {label: "Lecce", href: "lecce"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["lecce"],
      name: "Lecce",
  }),
});
