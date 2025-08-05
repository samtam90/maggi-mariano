import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Perugia",
  canonical: links.servizi["spurgo-pozzi-neri"]["perugia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Perugia", 
    locationNames: {label: "Perugia", href: "perugia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
