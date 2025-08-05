import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Trevi",
  canonical: links.servizi["spurgo-pozzi-neri"]["trevi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Trevi", 
    locationNames: {label: "Trevi", href: "trevi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
