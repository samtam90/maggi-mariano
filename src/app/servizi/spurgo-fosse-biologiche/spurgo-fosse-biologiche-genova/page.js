import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Genova",
  canonical: links.servizi["spurgo-fosse-biologiche"]["genova"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Genova", 
    locationNames: {label: "Genova", href: "genova"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["genova"],
      name: "Genova",
  }),
});
