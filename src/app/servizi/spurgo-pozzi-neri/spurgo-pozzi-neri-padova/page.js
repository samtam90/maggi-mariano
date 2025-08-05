import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Padova",
  canonical: links.servizi["spurgo-pozzi-neri"]["padova"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Padova", 
    locationNames: {label: "Padova", href: "padova"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["padova"],
      name: "Padova",
  }),
});
