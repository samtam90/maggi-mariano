import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Impruneta",
  canonical: links.servizi["spurgo-pozzi-neri"]["impruneta"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
