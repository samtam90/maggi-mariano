import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bolzano",
  canonical: links.servizi["spurgo-pozzi-neri"]["bolzano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["bolzano"],
      name: "Bolzano",
  }),
});
