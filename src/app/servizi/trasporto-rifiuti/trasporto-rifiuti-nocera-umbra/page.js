import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Nocera Umbra",
  canonical: links.servizi["trasporto-rifiuti"]["nocera-umbra"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Nocera Umbra", 
    locationNames: {label: "Nocera Umbra", href: "nocera-umbra"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
