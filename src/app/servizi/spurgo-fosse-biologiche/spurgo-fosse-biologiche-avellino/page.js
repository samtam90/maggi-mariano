import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Avellino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["avellino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Avellino", 
    locationNames: {label: "Avellino", href: "avellino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["avellino"],
      name: "Avellino",
  }),
});
