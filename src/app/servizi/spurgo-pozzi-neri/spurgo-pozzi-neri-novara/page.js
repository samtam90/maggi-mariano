import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Novara",
  canonical: links.servizi["spurgo-pozzi-neri"]["novara"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Novara", 
    locationNames: {label: "Novara", href: "novara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["novara"],
      name: "Novara",
  }),
});
