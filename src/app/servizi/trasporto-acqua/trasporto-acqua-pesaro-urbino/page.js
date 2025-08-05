import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Pesaro-Urbino",
  canonical: links.servizi["trasporto-acqua"]["pesaro-urbino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["pesaro-urbino"],
      name: "Pesaro-Urbino",
  }),
});
