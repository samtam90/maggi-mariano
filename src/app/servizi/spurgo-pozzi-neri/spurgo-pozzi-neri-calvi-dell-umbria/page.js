import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Calvi dell'Umbria",
  canonical: links.servizi["spurgo-pozzi-neri"]["calvi-dell-umbria"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Calvi dell'Umbria", 
    locationNames: {label: "Calvi dell'Umbria", href: "calvi-dell-umbria"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
