import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Roma",
  canonical: links.servizi["spurgo-pozzi-neri"]["roma"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Roma", 
    locationNames: {label: "Roma", href: "roma"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["roma"],
      name: "Roma",
  }),
});
