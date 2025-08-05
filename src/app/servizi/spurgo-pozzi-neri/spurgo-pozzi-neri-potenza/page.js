import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Potenza",
  canonical: links.servizi["spurgo-pozzi-neri"]["potenza"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Potenza", 
    locationNames: {label: "Potenza", href: "potenza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["potenza"],
      name: "Potenza",
  }),
});
