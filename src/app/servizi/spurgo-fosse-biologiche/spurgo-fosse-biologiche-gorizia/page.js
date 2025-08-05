import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gorizia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["gorizia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["gorizia"],
      name: "Gorizia",
  }),
});
