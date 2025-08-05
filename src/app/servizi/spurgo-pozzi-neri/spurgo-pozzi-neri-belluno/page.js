import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Belluno",
  canonical: links.servizi["spurgo-pozzi-neri"]["belluno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Belluno", 
    locationNames: {label: "Belluno", href: "belluno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["belluno"],
      name: "Belluno",
  }),
});
