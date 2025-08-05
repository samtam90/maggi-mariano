import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ogliastra",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ogliastra"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["ogliastra"],
      name: "Ogliastra",
  }),
});
