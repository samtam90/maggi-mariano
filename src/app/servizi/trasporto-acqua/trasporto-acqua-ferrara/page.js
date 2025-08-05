import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Ferrara",
  canonical: links.servizi["trasporto-acqua"]["ferrara"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["ferrara"],
      name: "Ferrara",
  }),
});
