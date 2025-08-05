import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Benevento",
  canonical: links.servizi["trasporto-acqua"]["benevento"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Benevento", 
    locationNames: {label: "Benevento", href: "benevento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["benevento"],
      name: "Benevento",
  }),
});
