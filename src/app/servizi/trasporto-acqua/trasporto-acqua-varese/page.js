import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Varese",
  canonical: links.servizi["trasporto-acqua"]["varese"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Varese", 
    locationNames: {label: "Varese", href: "varese"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["varese"],
      name: "Varese",
  }),
});
