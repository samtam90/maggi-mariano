import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castelfiorentino",
  canonical: links.servizi["trasporto-rifiuti"]["castelfiorentino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castelfiorentino", 
    locationNames: {label: "Castelfiorentino", href: "castelfiorentino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
