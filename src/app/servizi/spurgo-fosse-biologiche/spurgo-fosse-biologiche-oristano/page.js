import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Oristano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["oristano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Oristano", 
    locationNames: {label: "Oristano", href: "oristano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["oristano"],
      name: "Oristano",
  }),
});
