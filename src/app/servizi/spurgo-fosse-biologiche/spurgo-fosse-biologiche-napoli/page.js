import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Napoli",
  canonical: links.servizi["spurgo-fosse-biologiche"]["napoli"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Napoli", 
    locationNames: {label: "Napoli", href: "napoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["napoli"],
      name: "Napoli",
  }),
});
