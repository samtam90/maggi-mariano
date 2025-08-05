import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Parrano",
  canonical: links.servizi["spurgo-pozzi-neri"]["parrano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Parrano", 
    locationNames: {label: "Parrano", href: "parrano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
