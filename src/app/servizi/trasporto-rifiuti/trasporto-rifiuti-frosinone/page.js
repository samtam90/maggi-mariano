import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Frosinone",
  canonical: links.servizi["trasporto-rifiuti"]["frosinone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["frosinone"],
      name: "Frosinone",
  }),
});
