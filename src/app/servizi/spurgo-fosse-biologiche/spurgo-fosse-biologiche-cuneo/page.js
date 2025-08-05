import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cuneo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cuneo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["cuneo"],
      name: "Cuneo",
  }),
});
