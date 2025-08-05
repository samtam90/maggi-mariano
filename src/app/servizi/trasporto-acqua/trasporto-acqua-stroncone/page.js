import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Stroncone",
  canonical: links.servizi["trasporto-acqua"]["stroncone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Stroncone", 
    locationNames: {label: "Stroncone", href: "stroncone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
