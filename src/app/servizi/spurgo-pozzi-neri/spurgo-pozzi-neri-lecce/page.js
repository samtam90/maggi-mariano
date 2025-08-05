import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lecce",
  canonical: links.servizi["spurgo-pozzi-neri"]["lecce"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lecce", 
    locationNames: {label: "Lecce", href: "lecce"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["lecce"],
      name: "Lecce",
  }),
});
