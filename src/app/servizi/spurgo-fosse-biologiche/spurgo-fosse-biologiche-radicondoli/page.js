import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Radicondoli",
  canonical: links.servizi["spurgo-fosse-biologiche"]["radicondoli"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Radicondoli", 
    locationNames: {label: "Radicondoli", href: "radicondoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
