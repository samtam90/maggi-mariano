import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Lugnano in Teverina",
  canonical: links.servizi["trasporto-acqua"]["lugnano-in-teverina"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lugnano in Teverina", 
    locationNames: {label: "Lugnano in Teverina", href: "lugnano-in-teverina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
