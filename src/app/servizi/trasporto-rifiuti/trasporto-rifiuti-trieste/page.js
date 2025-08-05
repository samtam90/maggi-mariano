import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trieste",
  canonical: links.servizi["trasporto-rifiuti"]["trieste"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trieste", 
    locationNames: {label: "Trieste", href: "trieste"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["trieste"],
      name: "Trieste",
  }),
});
