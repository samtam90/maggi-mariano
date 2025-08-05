import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fucecchio",
  canonical: links.servizi["trasporto-rifiuti"]["fucecchio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
