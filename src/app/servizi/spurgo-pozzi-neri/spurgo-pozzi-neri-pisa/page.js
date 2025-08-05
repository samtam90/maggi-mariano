import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pisa",
  canonical: links.servizi["spurgo-pozzi-neri"]["pisa"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pisa", 
    locationNames: {label: "Pisa", href: "pisa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["pisa"],
      name: "Pisa",
  }),
});
