import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Trento",
  canonical: links.servizi["spurgo-pozzi-neri"]["trento"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Trento", 
    locationNames: {label: "Trento", href: "trento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["trento"],
      name: "Trento",
  }),
});
