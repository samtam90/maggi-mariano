import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bari",
  canonical: links.servizi["trasporto-rifiuti"]["bari"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bari", 
    locationNames: {label: "Bari", href: "bari"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["bari"],
      name: "Bari",
  }),
});
