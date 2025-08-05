import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Latina",
  canonical: links.servizi["spurgo-pozzi-neri"]["latina"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Latina", 
    locationNames: {label: "Latina", href: "latina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["latina"],
      name: "Latina",
  }),
});
