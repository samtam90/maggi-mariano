import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Caserta",
  canonical: links.servizi["trasporto-acqua"]["caserta"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Caserta", 
    locationNames: {label: "Caserta", href: "caserta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["caserta"],
      name: "Caserta",
  }),
});
