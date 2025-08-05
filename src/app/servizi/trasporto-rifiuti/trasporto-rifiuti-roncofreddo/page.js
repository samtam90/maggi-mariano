import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Roncofreddo",
  canonical: links.servizi["trasporto-rifiuti"]["roncofreddo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Roncofreddo", 
    locationNames: {label: "Roncofreddo", href: "roncofreddo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
