import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Orvieto",
  canonical: links.servizi["spurgo-pozzi-neri"]["orvieto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Orvieto", 
    locationNames: {label: "Orvieto", href: "orvieto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
