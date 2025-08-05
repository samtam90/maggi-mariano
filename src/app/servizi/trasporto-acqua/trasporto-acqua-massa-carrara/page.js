import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Massa-Carrara",
  canonical: links.servizi["trasporto-acqua"]["massa-carrara"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["massa-carrara"],
      name: "Massa-Carrara",
  }),
});
