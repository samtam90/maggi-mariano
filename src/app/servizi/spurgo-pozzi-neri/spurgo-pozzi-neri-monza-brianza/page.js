import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monza Brianza",
  canonical: links.servizi["spurgo-pozzi-neri"]["monza-brianza"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["monza-brianza"],
      name: "Monza Brianza",
  }),
});
