import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sinalunga",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sinalunga"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sinalunga", 
    locationNames: {label: "Sinalunga", href: "sinalunga"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
