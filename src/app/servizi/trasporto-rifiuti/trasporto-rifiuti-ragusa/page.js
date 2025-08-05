import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ragusa",
  canonical: links.servizi["trasporto-rifiuti"]["ragusa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["ragusa"],
      name: "Ragusa",
  }),
});
