import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Attigliano",
  canonical: links.servizi["spurgo-pozzi-neri"]["attigliano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Attigliano", 
    locationNames: {label: "Attigliano", href: "attigliano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
