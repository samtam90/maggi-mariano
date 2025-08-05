import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pisa",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pisa"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pisa", 
    locationNames: {label: "Pisa", href: "pisa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["pisa"],
      name: "Pisa",
  }),
});
