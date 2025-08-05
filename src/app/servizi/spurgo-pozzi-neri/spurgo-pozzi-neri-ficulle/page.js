import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ficulle",
  canonical: links.servizi["spurgo-pozzi-neri"]["ficulle"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ficulle", 
    locationNames: {label: "Ficulle", href: "ficulle"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
