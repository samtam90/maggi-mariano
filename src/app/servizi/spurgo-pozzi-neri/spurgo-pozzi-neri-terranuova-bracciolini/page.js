import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Terranuova Bracciolini",
  canonical: links.servizi["spurgo-pozzi-neri"]["terranuova-bracciolini"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Terranuova Bracciolini", 
    locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
