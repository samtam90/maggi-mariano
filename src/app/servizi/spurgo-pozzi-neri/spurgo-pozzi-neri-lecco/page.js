import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lecco",
  canonical: links.servizi["spurgo-pozzi-neri"]["lecco"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lecco", 
    locationNames: {label: "Lecco", href: "lecco"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["lecco"],
      name: "Lecco",
  }),
});
