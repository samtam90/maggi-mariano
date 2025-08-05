import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Isernia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["isernia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Isernia", 
    locationNames: {label: "Isernia", href: "isernia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["isernia"],
      name: "Isernia",
  }),
});
