import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sassari",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sassari"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sassari", 
    locationNames: {label: "Sassari", href: "sassari"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["sassari"],
      name: "Sassari",
  }),
});
