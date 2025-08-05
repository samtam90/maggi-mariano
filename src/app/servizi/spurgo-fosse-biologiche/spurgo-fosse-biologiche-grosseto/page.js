import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Grosseto",
  canonical: links.servizi["spurgo-fosse-biologiche"]["grosseto"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["grosseto"],
      name: "Grosseto",
  }),
});
