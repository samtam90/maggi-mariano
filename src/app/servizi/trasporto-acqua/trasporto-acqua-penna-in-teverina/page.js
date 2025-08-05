import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Penna in Teverina",
  canonical: links.servizi["trasporto-acqua"]["penna-in-teverina"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Penna in Teverina", 
    locationNames: {label: "Penna in Teverina", href: "penna-in-teverina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
