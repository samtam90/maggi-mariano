import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Bergamo",
  canonical: links.servizi["trasporto-acqua"]["bergamo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["bergamo"],
      name: "Bergamo",
  }),
});
