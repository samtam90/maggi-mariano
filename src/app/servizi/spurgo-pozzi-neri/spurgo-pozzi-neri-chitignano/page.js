import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Chitignano",
  canonical: links.servizi["spurgo-pozzi-neri"]["chitignano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
