import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Roncofreddo",
  canonical: links.servizi["trasporto-acqua"]["roncofreddo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Roncofreddo", 
    locationNames: {label: "Roncofreddo", href: "roncofreddo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
