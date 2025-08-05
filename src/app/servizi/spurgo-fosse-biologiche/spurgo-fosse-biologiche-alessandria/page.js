import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Alessandria",
  canonical: links.servizi["spurgo-fosse-biologiche"]["alessandria"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Alessandria", 
    locationNames: {label: "Alessandria", href: "alessandria"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["alessandria"],
      name: "Alessandria",
  }),
});
