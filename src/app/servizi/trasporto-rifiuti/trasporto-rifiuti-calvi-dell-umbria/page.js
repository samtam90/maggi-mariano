import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Calvi dell'Umbria",
  canonical: links.servizi["trasporto-rifiuti"]["calvi-dell-umbria"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Calvi dell'Umbria", 
    locationNames: {label: "Calvi dell'Umbria", href: "calvi-dell-umbria"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
