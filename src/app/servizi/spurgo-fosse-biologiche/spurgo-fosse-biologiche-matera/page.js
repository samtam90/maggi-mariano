import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Matera",
  canonical: links.servizi["spurgo-fosse-biologiche"]["matera"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Matera", 
    locationNames: {label: "Matera", href: "matera"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["matera"],
      name: "Matera",
  }),
});
