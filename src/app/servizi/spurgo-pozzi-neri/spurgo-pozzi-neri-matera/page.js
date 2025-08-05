import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Matera",
  canonical: links.servizi["spurgo-pozzi-neri"]["matera"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Matera", 
    locationNames: {label: "Matera", href: "matera"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["matera"],
      name: "Matera",
  }),
});
