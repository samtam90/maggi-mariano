import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Fermo",
  canonical: links.servizi["trasporto-acqua"]["fermo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Fermo", 
    locationNames: {label: "Fermo", href: "fermo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["fermo"],
      name: "Fermo",
  }),
});
