import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lodi",
  canonical: links.servizi["spurgo-pozzi-neri"]["lodi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lodi", 
    locationNames: {label: "Lodi", href: "lodi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["lodi"],
      name: "Lodi",
  }),
});
