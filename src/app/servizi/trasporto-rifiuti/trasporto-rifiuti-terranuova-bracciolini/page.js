import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Terranuova Bracciolini",
  canonical: links.servizi["trasporto-rifiuti"]["terranuova-bracciolini"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Terranuova Bracciolini", 
    locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
