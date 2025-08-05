import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pelago",
  canonical: links.servizi["trasporto-rifiuti"]["pelago"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pelago", 
    locationNames: {label: "Pelago", href: "pelago"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
