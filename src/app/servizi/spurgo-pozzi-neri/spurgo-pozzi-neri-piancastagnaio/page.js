import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Piancastagnaio",
  canonical: links.servizi["spurgo-pozzi-neri"]["piancastagnaio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Piancastagnaio", 
    locationNames: {label: "Piancastagnaio", href: "piancastagnaio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
