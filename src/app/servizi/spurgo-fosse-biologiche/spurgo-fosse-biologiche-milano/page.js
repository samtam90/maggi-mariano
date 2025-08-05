import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Milano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["milano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Milano", 
    locationNames: {label: "Milano", href: "milano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["milano"],
      name: "Milano",
  }),
});
