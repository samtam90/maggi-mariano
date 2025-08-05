import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Varese",
  canonical: links.servizi["trasporto-rifiuti"]["varese"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Varese", 
    locationNames: {label: "Varese", href: "varese"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["varese"],
      name: "Varese",
  }),
});
