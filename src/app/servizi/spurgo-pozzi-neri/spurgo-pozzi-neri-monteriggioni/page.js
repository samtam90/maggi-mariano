import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monteriggioni",
  canonical: links.servizi["spurgo-pozzi-neri"]["monteriggioni"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monteriggioni", 
    locationNames: {label: "Monteriggioni", href: "monteriggioni"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
