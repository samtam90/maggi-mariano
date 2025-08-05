import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Chiusi della Verna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["chiusi-della-verna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
