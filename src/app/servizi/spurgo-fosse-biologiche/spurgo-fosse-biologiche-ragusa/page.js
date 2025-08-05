import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ragusa",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ragusa"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["ragusa"],
      name: "Ragusa",
  }),
});
