import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Verbano-Cusio-Ossola",
  canonical: links.servizi["spurgo-pozzi-neri"]["verbano-cusio-ossola"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["verbano-cusio-ossola"],
      name: "Verbano-Cusio-Ossola",
  }),
});
