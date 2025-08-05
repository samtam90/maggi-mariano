import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Livorno",
  canonical: links.servizi["trasporto-acqua"]["livorno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Livorno", 
    locationNames: {label: "Livorno", href: "livorno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["livorno"],
      name: "Livorno",
  }),
});
