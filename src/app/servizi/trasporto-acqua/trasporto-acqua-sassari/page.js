import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Sassari",
  canonical: links.servizi["trasporto-acqua"]["sassari"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sassari", 
    locationNames: {label: "Sassari", href: "sassari"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["sassari"],
      name: "Sassari",
  }),
});
