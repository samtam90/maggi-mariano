import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri San Giustino",
  canonical: links.servizi["spurgo-pozzi-neri"]["san-giustino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
