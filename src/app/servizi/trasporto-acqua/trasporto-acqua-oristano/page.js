import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Oristano",
  canonical: links.servizi["trasporto-acqua"]["oristano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Oristano", 
    locationNames: {label: "Oristano", href: "oristano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["oristano"],
      name: "Oristano",
  }),
});
