import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Varese",
  canonical: links.servizi["spurgo-pozzi-neri"]["varese"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Varese", 
    locationNames: {label: "Varese", href: "varese"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["varese"],
      name: "Varese",
  }),
});
