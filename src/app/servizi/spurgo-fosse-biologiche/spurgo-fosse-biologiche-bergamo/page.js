import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bergamo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bergamo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["bergamo"],
      name: "Bergamo",
  }),
});
