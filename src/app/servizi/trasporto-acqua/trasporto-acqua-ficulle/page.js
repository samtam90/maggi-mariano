import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Ficulle",
  canonical: links.servizi["trasporto-acqua"]["ficulle"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ficulle", 
    locationNames: {label: "Ficulle", href: "ficulle"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
