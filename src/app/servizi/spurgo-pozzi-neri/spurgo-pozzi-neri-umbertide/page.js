import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Umbertide",
  canonical: links.servizi["spurgo-pozzi-neri"]["umbertide"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
