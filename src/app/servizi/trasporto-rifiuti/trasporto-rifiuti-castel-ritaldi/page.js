import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castel Ritaldi",
  canonical: links.servizi["trasporto-rifiuti"]["castel-ritaldi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castel Ritaldi", 
    locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
