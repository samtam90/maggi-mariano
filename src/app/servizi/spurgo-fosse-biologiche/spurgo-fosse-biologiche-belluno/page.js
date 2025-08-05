import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Belluno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["belluno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Belluno", 
    locationNames: {label: "Belluno", href: "belluno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["belluno"],
      name: "Belluno",
  }),
});
