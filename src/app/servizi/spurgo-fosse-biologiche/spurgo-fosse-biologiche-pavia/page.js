import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pavia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pavia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pavia", 
    locationNames: {label: "Pavia", href: "pavia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["pavia"],
      name: "Pavia",
  }),
});
