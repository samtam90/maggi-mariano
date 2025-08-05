import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lucignano",
  canonical: links.servizi["spurgo-pozzi-neri"]["lucignano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
