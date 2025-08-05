import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Mantova",
  canonical: links.servizi["trasporto-rifiuti"]["mantova"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Mantova", 
    locationNames: {label: "Mantova", href: "mantova"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["mantova"],
      name: "Mantova",
  }),
});
