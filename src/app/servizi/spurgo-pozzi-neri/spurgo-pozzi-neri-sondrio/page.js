import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sondrio",
  canonical: links.servizi["spurgo-pozzi-neri"]["sondrio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["sondrio"],
      name: "Sondrio",
  }),
});
