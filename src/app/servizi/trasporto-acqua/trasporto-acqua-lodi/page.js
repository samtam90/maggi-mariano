import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Lodi",
  canonical: links.servizi["trasporto-acqua"]["lodi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lodi", 
    locationNames: {label: "Lodi", href: "lodi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["lodi"],
      name: "Lodi",
  }),
});
