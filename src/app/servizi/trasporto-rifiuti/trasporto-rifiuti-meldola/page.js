import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Meldola",
  canonical: links.servizi["trasporto-rifiuti"]["meldola"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Meldola", 
    locationNames: {label: "Meldola", href: "meldola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
