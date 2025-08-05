import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sarsina",
  canonical: links.servizi["trasporto-rifiuti"]["sarsina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sarsina", 
    locationNames: {label: "Sarsina", href: "sarsina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
