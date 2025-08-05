import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pontassieve",
  canonical: links.servizi["trasporto-rifiuti"]["pontassieve"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pontassieve", 
    locationNames: {label: "Pontassieve", href: "pontassieve"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
