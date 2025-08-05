import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Montalcino",
  canonical: links.servizi["trasporto-acqua"]["montalcino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montalcino", 
    locationNames: {label: "Montalcino", href: "montalcino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
