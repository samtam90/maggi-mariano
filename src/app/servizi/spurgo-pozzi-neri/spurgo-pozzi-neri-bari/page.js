import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bari",
  canonical: links.servizi["spurgo-pozzi-neri"]["bari"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bari", 
    locationNames: {label: "Bari", href: "bari"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["bari"],
      name: "Bari",
  }),
});
