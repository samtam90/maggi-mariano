import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Macerata",
  canonical: links.servizi["spurgo-fosse-biologiche"]["macerata"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Macerata", 
    locationNames: {label: "Macerata", href: "macerata"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["macerata"],
      name: "Macerata",
  }),
});
