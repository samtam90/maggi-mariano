import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rovigo",
  canonical: links.servizi["trasporto-rifiuti"]["rovigo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["rovigo"],
      name: "Rovigo",
  }),
});
