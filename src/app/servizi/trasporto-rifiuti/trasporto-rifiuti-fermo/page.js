import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fermo",
  canonical: links.servizi["trasporto-rifiuti"]["fermo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fermo", 
    locationNames: {label: "Fermo", href: "fermo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["fermo"],
      name: "Fermo",
  }),
});
