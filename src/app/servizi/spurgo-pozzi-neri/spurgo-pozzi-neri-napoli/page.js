import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Napoli",
  canonical: links.servizi["spurgo-pozzi-neri"]["napoli"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Napoli", 
    locationNames: {label: "Napoli", href: "napoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["napoli"],
      name: "Napoli",
  }),
});
