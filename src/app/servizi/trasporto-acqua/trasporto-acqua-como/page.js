import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Como",
  canonical: links.servizi["trasporto-acqua"]["como"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Como", 
    locationNames: {label: "Como", href: "como"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["como"],
      name: "Como",
  }),
});
