import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Montecchio",
  canonical: links.servizi["trasporto-acqua"]["montecchio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montecchio", 
    locationNames: {label: "Montecchio", href: "montecchio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
