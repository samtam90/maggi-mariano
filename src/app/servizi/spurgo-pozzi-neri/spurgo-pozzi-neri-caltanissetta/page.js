import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Caltanissetta",
  canonical: links.servizi["spurgo-pozzi-neri"]["caltanissetta"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["caltanissetta"],
      name: "Caltanissetta",
  }),
});
