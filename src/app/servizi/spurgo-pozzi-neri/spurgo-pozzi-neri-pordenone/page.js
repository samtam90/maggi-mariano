import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pordenone",
  canonical: links.servizi["spurgo-pozzi-neri"]["pordenone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["pordenone"],
      name: "Pordenone",
  }),
});
