import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Mantova",
  canonical: links.servizi["spurgo-fosse-biologiche"]["mantova"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Mantova", 
    locationNames: {label: "Mantova", href: "mantova"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["mantova"],
      name: "Mantova",
  }),
});
