import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti La Spezia",
  canonical: links.servizi["trasporto-rifiuti"]["la-spezia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["la-spezia"],
      name: "La Spezia",
  }),
});
