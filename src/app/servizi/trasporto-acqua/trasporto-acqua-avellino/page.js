import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Avellino",
  canonical: links.servizi["trasporto-acqua"]["avellino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Avellino", 
    locationNames: {label: "Avellino", href: "avellino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["avellino"],
      name: "Avellino",
  }),
});
