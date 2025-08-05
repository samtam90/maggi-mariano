import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua San Gemini",
  canonical: links.servizi["trasporto-acqua"]["san-gemini"]
});
export default withBaseProps({ 
    title: "Trasporto acqua San Gemini", 
    locationNames: {label: "San Gemini", href: "san-gemini"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
