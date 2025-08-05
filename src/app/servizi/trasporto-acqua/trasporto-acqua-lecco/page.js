import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Lecco",
  canonical: links.servizi["trasporto-acqua"]["lecco"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lecco", 
    locationNames: {label: "Lecco", href: "lecco"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["lecco"],
      name: "Lecco",
  }),
});
