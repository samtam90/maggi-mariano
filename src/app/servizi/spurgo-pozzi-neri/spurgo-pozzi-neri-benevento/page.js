import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Benevento",
  canonical: links.servizi["spurgo-pozzi-neri"]["benevento"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Benevento", 
    locationNames: {label: "Benevento", href: "benevento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["benevento"],
      name: "Benevento",
  }),
});
