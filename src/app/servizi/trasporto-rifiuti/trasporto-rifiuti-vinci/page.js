import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vinci",
  canonical: links.servizi["trasporto-rifiuti"]["vinci"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vinci", 
    locationNames: {label: "Vinci", href: "vinci"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
