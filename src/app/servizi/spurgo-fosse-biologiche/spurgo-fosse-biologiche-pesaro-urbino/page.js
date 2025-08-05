import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pesaro-Urbino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pesaro-urbino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["pesaro-urbino"],
      name: "Pesaro-Urbino",
  }),
});
