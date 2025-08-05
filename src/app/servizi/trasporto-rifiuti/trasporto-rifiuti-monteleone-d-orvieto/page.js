import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monteleone d'Orvieto",
  canonical: links.servizi["trasporto-rifiuti"]["monteleone-d-orvieto"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monteleone d'Orvieto", 
    locationNames: {label: "Monteleone d'Orvieto", href: "monteleone-d-orvieto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
