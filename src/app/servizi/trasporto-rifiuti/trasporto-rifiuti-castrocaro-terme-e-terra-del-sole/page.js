import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castrocaro Terme e Terra del Sole",
  canonical: links.servizi["trasporto-rifiuti"]["castrocaro-terme-e-terra-del-sole"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castrocaro Terme e Terra del Sole", 
    locationNames: {label: "Castrocaro Terme e Terra del Sole", href: "castrocaro-terme-e-terra-del-sole"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
