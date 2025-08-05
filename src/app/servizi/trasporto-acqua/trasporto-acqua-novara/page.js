import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Novara",
  canonical: links.servizi["trasporto-acqua"]["novara"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Novara", 
    locationNames: {label: "Novara", href: "novara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["novara"],
      name: "Novara",
  }),
});
