import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Campobasso",
  canonical: links.servizi["trasporto-acqua"]["campobasso"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["campobasso"],
      name: "Campobasso",
  }),
});
