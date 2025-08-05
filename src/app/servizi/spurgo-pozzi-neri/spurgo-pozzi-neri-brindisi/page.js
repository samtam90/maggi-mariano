import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Brindisi",
  canonical: links.servizi["spurgo-pozzi-neri"]["brindisi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["brindisi"],
      name: "Brindisi",
  }),
});
