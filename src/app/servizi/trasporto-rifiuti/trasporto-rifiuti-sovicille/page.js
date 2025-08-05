import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sovicille",
  canonical: links.servizi["trasporto-rifiuti"]["sovicille"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sovicille", 
    locationNames: {label: "Sovicille", href: "sovicille"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
