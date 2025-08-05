import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Roma",
  canonical: links.servizi["trasporto-acqua"]["roma"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Roma", 
    locationNames: {label: "Roma", href: "roma"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["roma"],
      name: "Roma",
  }),
});
