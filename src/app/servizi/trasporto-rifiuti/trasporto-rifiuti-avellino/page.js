import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Avellino",
  canonical: links.servizi["trasporto-rifiuti"]["avellino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Avellino", 
    locationNames: {label: "Avellino", href: "avellino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["avellino"],
      name: "Avellino",
  }),
});
