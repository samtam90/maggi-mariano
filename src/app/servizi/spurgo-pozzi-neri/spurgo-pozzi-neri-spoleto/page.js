import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Spoleto",
  canonical: links.servizi["spurgo-pozzi-neri"]["spoleto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
