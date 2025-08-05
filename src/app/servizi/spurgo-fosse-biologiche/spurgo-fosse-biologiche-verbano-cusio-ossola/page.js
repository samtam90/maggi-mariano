import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Verbano-Cusio-Ossola",
  canonical: links.servizi["spurgo-fosse-biologiche"]["verbano-cusio-ossola"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["verbano-cusio-ossola"],
      name: "Verbano-Cusio-Ossola",
  }),
});
