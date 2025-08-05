import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Grosseto",
  canonical: links.servizi["spurgo-pozzi-neri"]["grosseto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["grosseto"],
      name: "Grosseto",
  }),
});
