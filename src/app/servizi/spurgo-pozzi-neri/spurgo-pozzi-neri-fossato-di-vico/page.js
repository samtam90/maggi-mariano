import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Fossato di Vico",
  canonical: links.servizi["spurgo-pozzi-neri"]["fossato-di-vico"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
