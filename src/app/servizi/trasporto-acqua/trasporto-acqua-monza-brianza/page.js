import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Monza Brianza",
  canonical: links.servizi["trasporto-acqua"]["monza-brianza"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["monza-brianza"],
      name: "Monza Brianza",
  }),
});
