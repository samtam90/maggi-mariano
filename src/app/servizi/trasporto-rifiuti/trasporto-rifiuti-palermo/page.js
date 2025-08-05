import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Palermo",
  canonical: links.servizi["trasporto-rifiuti"]["palermo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Palermo", 
    locationNames: {label: "Palermo", href: "palermo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["palermo"],
      name: "Palermo",
  }),
});
