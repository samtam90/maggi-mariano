import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Alviano",
  canonical: links.servizi["spurgo-pozzi-neri"]["alviano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Alviano", 
    locationNames: {label: "Alviano", href: "alviano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
