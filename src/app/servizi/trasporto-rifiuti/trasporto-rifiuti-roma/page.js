import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Roma",
  canonical: links.servizi["trasporto-rifiuti"]["roma"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Roma", 
    locationNames: {label: "Roma", href: "roma"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["roma"],
      name: "Roma",
  }),
});
