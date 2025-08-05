import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sigillo",
  canonical: links.servizi["spurgo-pozzi-neri"]["sigillo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
