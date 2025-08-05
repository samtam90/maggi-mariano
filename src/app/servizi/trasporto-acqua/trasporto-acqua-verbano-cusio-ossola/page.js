import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Verbano-Cusio-Ossola",
  canonical: links.servizi["trasporto-acqua"]["verbano-cusio-ossola"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["verbano-cusio-ossola"],
      name: "Verbano-Cusio-Ossola",
  }),
});
