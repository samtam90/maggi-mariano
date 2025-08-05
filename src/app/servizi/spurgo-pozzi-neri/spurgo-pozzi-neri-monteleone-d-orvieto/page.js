import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monteleone d'Orvieto",
  canonical: links.servizi["spurgo-pozzi-neri"]["monteleone-d-orvieto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monteleone d'Orvieto", 
    locationNames: {label: "Monteleone d'Orvieto", href: "monteleone-d-orvieto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
