import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Caltanissetta",
  canonical: links.servizi["trasporto-rifiuti"]["caltanissetta"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["caltanissetta"],
      name: "Caltanissetta",
  }),
});
