import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Montaione",
  canonical: links.servizi["trasporto-acqua"]["montaione"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montaione", 
    locationNames: {label: "Montaione", href: "montaione"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
