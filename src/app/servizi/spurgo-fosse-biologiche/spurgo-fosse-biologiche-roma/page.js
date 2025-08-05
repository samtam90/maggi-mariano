import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Roma",
  canonical: links.servizi["spurgo-fosse-biologiche"]["roma"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Roma", 
    locationNames: {label: "Roma", href: "roma"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["roma"],
      name: "Roma",
  }),
});
