import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Varese",
  canonical: links.servizi["spurgo-fosse-biologiche"]["varese"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Varese", 
    locationNames: {label: "Varese", href: "varese"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["varese"],
      name: "Varese",
  }),
});
