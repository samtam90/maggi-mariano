import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti San Godenzo",
  canonical: links.servizi["trasporto-rifiuti"]["san-godenzo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
