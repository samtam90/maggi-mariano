import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Medio Campidano",
  canonical: links.servizi["spurgo-pozzi-neri"]["medio-campidano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["medio-campidano"],
      name: "Medio Campidano",
  }),
});
