import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Livorno",
  canonical: links.servizi["spurgo-pozzi-neri"]["livorno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Livorno", 
    locationNames: {label: "Livorno", href: "livorno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["livorno"],
      name: "Livorno",
  }),
});
