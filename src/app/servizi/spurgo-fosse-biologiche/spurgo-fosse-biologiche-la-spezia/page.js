import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche La Spezia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["la-spezia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["la-spezia"],
      name: "La Spezia",
  }),
});
