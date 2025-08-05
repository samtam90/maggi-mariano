import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Torgiano",
  canonical: links.servizi["spurgo-pozzi-neri"]["torgiano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Torgiano", 
    locationNames: {label: "Torgiano", href: "torgiano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
