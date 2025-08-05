import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Campello sul Clitunno",
  canonical: links.servizi["spurgo-pozzi-neri"]["campello-sul-clitunno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
