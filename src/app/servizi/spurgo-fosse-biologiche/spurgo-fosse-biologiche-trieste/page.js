import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Trieste",
  canonical: links.servizi["spurgo-fosse-biologiche"]["trieste"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Trieste", 
    locationNames: {label: "Trieste", href: "trieste"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["trieste"],
      name: "Trieste",
  }),
});
