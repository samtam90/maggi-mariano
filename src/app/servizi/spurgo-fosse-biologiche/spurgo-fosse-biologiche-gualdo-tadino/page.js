import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gualdo Tadino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["gualdo-tadino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
