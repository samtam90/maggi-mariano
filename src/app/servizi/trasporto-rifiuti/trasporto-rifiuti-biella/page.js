import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Biella",
  canonical: links.servizi["trasporto-rifiuti"]["biella"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Biella", 
    locationNames: {label: "Biella", href: "biella"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["biella"],
      name: "Biella",
  }),
});
