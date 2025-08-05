import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Guardea",
  canonical: links.servizi["trasporto-acqua"]["guardea"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Guardea", 
    locationNames: {label: "Guardea", href: "guardea"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
