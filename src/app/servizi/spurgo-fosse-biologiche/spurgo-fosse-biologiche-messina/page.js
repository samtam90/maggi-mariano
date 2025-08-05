import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Messina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["messina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Messina", 
    locationNames: {label: "Messina", href: "messina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["messina"],
      name: "Messina",
  }),
});
