import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Livorno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["livorno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Livorno", 
    locationNames: {label: "Livorno", href: "livorno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["livorno"],
      name: "Livorno",
  }),
});
