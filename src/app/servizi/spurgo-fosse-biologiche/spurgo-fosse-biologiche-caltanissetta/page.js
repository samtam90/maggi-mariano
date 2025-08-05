import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Caltanissetta",
  canonical: links.servizi["spurgo-fosse-biologiche"]["caltanissetta"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["caltanissetta"],
      name: "Caltanissetta",
  }),
});
