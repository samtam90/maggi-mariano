import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bergamo",
  canonical: links.servizi["spurgo-pozzi-neri"]["bergamo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["bergamo"],
      name: "Bergamo",
  }),
});
