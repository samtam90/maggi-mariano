import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Palermo",
  canonical: links.servizi["trasporto-acqua"]["palermo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Palermo", 
    locationNames: {label: "Palermo", href: "palermo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["palermo"],
      name: "Palermo",
  }),
});
