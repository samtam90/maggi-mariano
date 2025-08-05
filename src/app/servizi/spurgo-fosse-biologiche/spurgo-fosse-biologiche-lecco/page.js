import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lecco",
  canonical: links.servizi["spurgo-fosse-biologiche"]["lecco"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lecco", 
    locationNames: {label: "Lecco", href: "lecco"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["lecco"],
      name: "Lecco",
  }),
});
