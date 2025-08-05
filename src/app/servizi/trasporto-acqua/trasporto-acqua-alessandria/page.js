import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Alessandria",
  canonical: links.servizi["trasporto-acqua"]["alessandria"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Alessandria", 
    locationNames: {label: "Alessandria", href: "alessandria"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["alessandria"],
      name: "Alessandria",
  }),
});
