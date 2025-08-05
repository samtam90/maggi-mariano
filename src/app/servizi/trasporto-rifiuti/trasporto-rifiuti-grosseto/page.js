import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Grosseto",
  canonical: links.servizi["trasporto-rifiuti"]["grosseto"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["grosseto"],
      name: "Grosseto",
  }),
});
