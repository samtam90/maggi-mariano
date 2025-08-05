import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Fucecchio",
  canonical: links.servizi["trasporto-acqua"]["fucecchio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
