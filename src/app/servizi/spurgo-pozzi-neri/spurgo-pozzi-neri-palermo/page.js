import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Palermo",
  canonical: links.servizi["spurgo-pozzi-neri"]["palermo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Palermo", 
    locationNames: {label: "Palermo", href: "palermo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["palermo"],
      name: "Palermo",
  }),
});
