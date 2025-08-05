import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Gorizia",
  canonical: links.servizi["trasporto-acqua"]["gorizia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["gorizia"],
      name: "Gorizia",
  }),
});
