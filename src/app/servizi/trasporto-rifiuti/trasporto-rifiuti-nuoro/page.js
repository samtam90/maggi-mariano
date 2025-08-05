import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Nuoro",
  canonical: links.servizi["trasporto-rifiuti"]["nuoro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["nuoro"],
      name: "Nuoro",
  }),
});
