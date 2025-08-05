import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Nuoro",
  canonical: links.servizi["trasporto-acqua"]["nuoro"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["nuoro"],
      name: "Nuoro",
  }),
});
