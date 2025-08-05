import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ravenna",
  canonical: links.servizi["spurgo-pozzi-neri"]["ravenna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["ravenna"],
      name: "Ravenna",
  }),
});
