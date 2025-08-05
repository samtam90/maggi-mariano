import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sassari",
  canonical: links.servizi["trasporto-rifiuti"]["sassari"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sassari", 
    locationNames: {label: "Sassari", href: "sassari"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["sassari"],
      name: "Sassari",
  }),
});
