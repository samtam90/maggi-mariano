import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Teramo",
  canonical: links.servizi["trasporto-rifiuti"]["teramo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Teramo", 
    locationNames: {label: "Teramo", href: "teramo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["teramo"],
      name: "Teramo",
  }),
});
