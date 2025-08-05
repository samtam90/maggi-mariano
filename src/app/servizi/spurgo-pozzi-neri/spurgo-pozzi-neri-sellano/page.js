import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sellano",
  canonical: links.servizi["spurgo-pozzi-neri"]["sellano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sellano", 
    locationNames: {label: "Sellano", href: "sellano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
