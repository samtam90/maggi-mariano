import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Cremona",
  canonical: links.servizi["trasporto-acqua"]["cremona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cremona", 
    locationNames: {label: "Cremona", href: "cremona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["cremona"],
      name: "Cremona",
  }),
});
