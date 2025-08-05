import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Caltanissetta",
  canonical: links.servizi["trasporto-acqua"]["caltanissetta"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["caltanissetta"],
      name: "Caltanissetta",
  }),
});
