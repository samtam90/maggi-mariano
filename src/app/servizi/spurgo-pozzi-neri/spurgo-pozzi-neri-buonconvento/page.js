import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Buonconvento",
  canonical: links.servizi["spurgo-pozzi-neri"]["buonconvento"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Buonconvento", 
    locationNames: {label: "Buonconvento", href: "buonconvento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
