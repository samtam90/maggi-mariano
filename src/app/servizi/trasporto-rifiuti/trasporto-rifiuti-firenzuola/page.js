import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Firenzuola",
  canonical: links.servizi["trasporto-rifiuti"]["firenzuola"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
