import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Biella",
  canonical: links.servizi["spurgo-fosse-biologiche"]["biella"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Biella", 
    locationNames: {label: "Biella", href: "biella"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["biella"],
      name: "Biella",
  }),
});
