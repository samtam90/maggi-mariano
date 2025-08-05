import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Foligno",
  canonical: links.servizi["spurgo-pozzi-neri"]["foligno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Foligno", 
    locationNames: {label: "Foligno", href: "foligno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
