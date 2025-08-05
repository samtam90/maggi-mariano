import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lucca",
  canonical: links.servizi["trasporto-rifiuti"]["lucca"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lucca", 
    locationNames: {label: "Lucca", href: "lucca"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["lucca"],
      name: "Lucca",
  }),
});
