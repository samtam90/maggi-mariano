import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Corciano",
  canonical: links.servizi["spurgo-pozzi-neri"]["corciano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Corciano", 
    locationNames: {label: "Corciano", href: "corciano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
