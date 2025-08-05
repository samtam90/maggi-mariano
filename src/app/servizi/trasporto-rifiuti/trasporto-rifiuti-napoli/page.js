import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Napoli",
  canonical: links.servizi["trasporto-rifiuti"]["napoli"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Napoli", 
    locationNames: {label: "Napoli", href: "napoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["napoli"],
      name: "Napoli",
  }),
});
