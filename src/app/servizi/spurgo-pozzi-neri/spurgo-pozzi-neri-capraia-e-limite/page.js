import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Capraia e Limite",
  canonical: links.servizi["spurgo-pozzi-neri"]["capraia-e-limite"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Capraia e Limite", 
    locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
