import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montecchio",
  canonical: links.servizi["trasporto-rifiuti"]["montecchio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montecchio", 
    locationNames: {label: "Montecchio", href: "montecchio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
