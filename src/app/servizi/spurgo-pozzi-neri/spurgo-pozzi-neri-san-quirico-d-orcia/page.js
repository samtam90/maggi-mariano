import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri San Quirico d'Orcia",
  canonical: links.servizi["spurgo-pozzi-neri"]["san-quirico-d-orcia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri San Quirico d'Orcia", 
    locationNames: {label: "San Quirico d'Orcia", href: "san-quirico-d-orcia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
