import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Frosinone",
  canonical: links.servizi["trasporto-acqua"]["frosinone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["frosinone"],
      name: "Frosinone",
  }),
});
