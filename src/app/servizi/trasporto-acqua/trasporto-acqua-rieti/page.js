import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Rieti",
  canonical: links.servizi["trasporto-acqua"]["rieti"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rieti", 
    locationNames: {label: "Rieti", href: "rieti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["rieti"],
      name: "Rieti",
  }),
});
