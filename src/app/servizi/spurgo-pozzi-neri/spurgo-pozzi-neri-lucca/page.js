import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lucca",
  canonical: links.servizi["spurgo-pozzi-neri"]["lucca"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lucca", 
    locationNames: {label: "Lucca", href: "lucca"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["lucca"],
      name: "Lucca",
  }),
});
