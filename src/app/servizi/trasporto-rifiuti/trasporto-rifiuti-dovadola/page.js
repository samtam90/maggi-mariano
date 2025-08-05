import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Dovadola",
  canonical: links.servizi["trasporto-rifiuti"]["dovadola"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Dovadola", 
    locationNames: {label: "Dovadola", href: "dovadola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
