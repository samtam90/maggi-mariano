import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bari",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bari"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bari", 
    locationNames: {label: "Bari", href: "bari"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["bari"],
      name: "Bari",
  }),
});
