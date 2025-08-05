import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Novara",
  canonical: links.servizi["spurgo-fosse-biologiche"]["novara"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Novara", 
    locationNames: {label: "Novara", href: "novara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["novara"],
      name: "Novara",
  }),
});
