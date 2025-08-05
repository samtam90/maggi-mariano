import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Modigliana",
  canonical: links.servizi["spurgo-pozzi-neri"]["modigliana"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Modigliana", 
    locationNames: {label: "Modigliana", href: "modigliana"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
