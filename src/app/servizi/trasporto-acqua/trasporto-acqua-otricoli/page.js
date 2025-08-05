import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Otricoli",
  canonical: links.servizi["trasporto-acqua"]["otricoli"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Otricoli", 
    locationNames: {label: "Otricoli", href: "otricoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
