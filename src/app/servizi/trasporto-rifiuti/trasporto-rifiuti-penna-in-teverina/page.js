import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Penna in Teverina",
  canonical: links.servizi["trasporto-rifiuti"]["penna-in-teverina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Penna in Teverina", 
    locationNames: {label: "Penna in Teverina", href: "penna-in-teverina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
