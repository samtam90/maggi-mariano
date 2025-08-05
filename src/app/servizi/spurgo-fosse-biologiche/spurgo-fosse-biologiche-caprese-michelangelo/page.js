import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Caprese Michelangelo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["caprese-michelangelo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Caprese Michelangelo", 
    locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
