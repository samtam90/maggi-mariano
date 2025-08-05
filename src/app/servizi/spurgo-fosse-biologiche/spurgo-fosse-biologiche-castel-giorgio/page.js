import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castel Giorgio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castel-giorgio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castel Giorgio", 
    locationNames: {label: "Castel Giorgio", href: "castel-giorgio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
