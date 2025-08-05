import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gambettola",
  canonical: links.servizi["trasporto-rifiuti"]["gambettola"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gambettola", 
    locationNames: {label: "Gambettola", href: "gambettola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
