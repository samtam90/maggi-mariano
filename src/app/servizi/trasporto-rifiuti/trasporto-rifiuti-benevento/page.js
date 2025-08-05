import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Benevento",
  canonical: links.servizi["trasporto-rifiuti"]["benevento"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Benevento", 
    locationNames: {label: "Benevento", href: "benevento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["benevento"],
      name: "Benevento",
  }),
});
