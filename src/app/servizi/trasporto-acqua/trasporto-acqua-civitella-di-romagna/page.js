import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Civitella di Romagna",
  canonical: links.servizi["trasporto-acqua"]["civitella-di-romagna"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Civitella di Romagna", 
    locationNames: {label: "Civitella di Romagna", href: "civitella-di-romagna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
