import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Bari",
  canonical: links.servizi["trasporto-acqua"]["bari"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bari", 
    locationNames: {label: "Bari", href: "bari"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["bari"],
      name: "Bari",
  }),
});
