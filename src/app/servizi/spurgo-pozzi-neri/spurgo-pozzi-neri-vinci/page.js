import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Vinci",
  canonical: links.servizi["spurgo-pozzi-neri"]["vinci"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Vinci", 
    locationNames: {label: "Vinci", href: "vinci"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
