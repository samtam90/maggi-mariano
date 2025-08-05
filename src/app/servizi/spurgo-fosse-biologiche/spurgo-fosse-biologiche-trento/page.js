import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Trento",
  canonical: links.servizi["spurgo-fosse-biologiche"]["trento"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Trento", 
    locationNames: {label: "Trento", href: "trento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["trento"],
      name: "Trento",
  }),
});
