import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Brescia",
  canonical: links.servizi["trasporto-rifiuti"]["brescia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Brescia", 
    locationNames: {label: "Brescia", href: "brescia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["brescia"],
      name: "Brescia",
  }),
});
