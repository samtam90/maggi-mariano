import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Civitella di Romagna",
  canonical: links.servizi["trasporto-rifiuti"]["civitella-di-romagna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Civitella di Romagna", 
    locationNames: {label: "Civitella di Romagna", href: "civitella-di-romagna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
