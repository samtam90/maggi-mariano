import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Siracusa",
  canonical: links.servizi["trasporto-acqua"]["siracusa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Siracusa", 
    locationNames: {label: "Siracusa", href: "siracusa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siracusa"],
      name: "Siracusa",
  }),
});
