import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Novara",
  canonical: links.servizi["trasporto-rifiuti"]["novara"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Novara", 
    locationNames: {label: "Novara", href: "novara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["novara"],
      name: "Novara",
  }),
});
