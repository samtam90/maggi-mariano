import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Caprese Michelangelo",
  canonical: links.servizi["spurgo-pozzi-neri"]["caprese-michelangelo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Caprese Michelangelo", 
    locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
