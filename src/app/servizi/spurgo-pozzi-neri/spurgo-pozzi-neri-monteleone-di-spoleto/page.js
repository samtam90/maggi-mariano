import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monteleone di Spoleto",
  canonical: links.servizi["spurgo-pozzi-neri"]["monteleone-di-spoleto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
