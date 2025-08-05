import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lastra a Signa",
  canonical: links.servizi["spurgo-pozzi-neri"]["lastra-a-signa"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lastra a Signa", 
    locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
