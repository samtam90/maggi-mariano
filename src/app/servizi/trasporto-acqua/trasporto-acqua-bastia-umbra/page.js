import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Bastia Umbra",
  canonical: links.servizi["trasporto-acqua"]["bastia-umbra"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bastia Umbra", 
    locationNames: {label: "Bastia Umbra", href: "bastia-umbra"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
