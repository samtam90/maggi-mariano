import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Savona",
  canonical: links.servizi["spurgo-fosse-biologiche"]["savona"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Savona", 
    locationNames: {label: "Savona", href: "savona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["savona"],
      name: "Savona",
  }),
});
