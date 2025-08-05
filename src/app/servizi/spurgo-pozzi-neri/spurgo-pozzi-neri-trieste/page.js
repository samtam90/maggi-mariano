import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Trieste",
  canonical: links.servizi["spurgo-pozzi-neri"]["trieste"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Trieste", 
    locationNames: {label: "Trieste", href: "trieste"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["trieste"],
      name: "Trieste",
  }),
});
