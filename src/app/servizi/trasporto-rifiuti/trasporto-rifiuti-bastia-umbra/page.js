import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bastia Umbra",
  canonical: links.servizi["trasporto-rifiuti"]["bastia-umbra"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bastia Umbra", 
    locationNames: {label: "Bastia Umbra", href: "bastia-umbra"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
