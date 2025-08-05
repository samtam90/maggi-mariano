import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Savona",
  canonical: links.servizi["trasporto-acqua"]["savona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Savona", 
    locationNames: {label: "Savona", href: "savona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["savona"],
      name: "Savona",
  }),
});
