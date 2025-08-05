import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ravenna",
  canonical: links.servizi["trasporto-rifiuti"]["ravenna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["ravenna"],
      name: "Ravenna",
  }),
});
