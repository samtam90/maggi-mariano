import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Sovicille",
  canonical: links.servizi["trasporto-acqua"]["sovicille"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sovicille", 
    locationNames: {label: "Sovicille", href: "sovicille"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
