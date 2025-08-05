import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Mantova",
  canonical: links.servizi["spurgo-pozzi-neri"]["mantova"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Mantova", 
    locationNames: {label: "Mantova", href: "mantova"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["mantova"],
      name: "Mantova",
  }),
});
