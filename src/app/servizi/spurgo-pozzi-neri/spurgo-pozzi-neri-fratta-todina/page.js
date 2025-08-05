import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Fratta Todina",
  canonical: links.servizi["spurgo-pozzi-neri"]["fratta-todina"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Fratta Todina", 
    locationNames: {label: "Fratta Todina", href: "fratta-todina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
