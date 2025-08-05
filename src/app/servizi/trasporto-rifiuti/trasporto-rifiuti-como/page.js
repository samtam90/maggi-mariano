import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Como",
  canonical: links.servizi["trasporto-rifiuti"]["como"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Como", 
    locationNames: {label: "Como", href: "como"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["como"],
      name: "Como",
  }),
});
