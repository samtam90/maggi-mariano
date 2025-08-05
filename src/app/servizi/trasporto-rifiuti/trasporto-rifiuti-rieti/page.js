import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rieti",
  canonical: links.servizi["trasporto-rifiuti"]["rieti"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rieti", 
    locationNames: {label: "Rieti", href: "rieti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["rieti"],
      name: "Rieti",
  }),
});
