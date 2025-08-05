import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Nuoro",
  canonical: links.servizi["spurgo-fosse-biologiche"]["nuoro"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["nuoro"],
      name: "Nuoro",
  }),
});
