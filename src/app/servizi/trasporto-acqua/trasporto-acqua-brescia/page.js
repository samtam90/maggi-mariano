import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Brescia",
  canonical: links.servizi["trasporto-acqua"]["brescia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Brescia", 
    locationNames: {label: "Brescia", href: "brescia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["brescia"],
      name: "Brescia",
  }),
});
