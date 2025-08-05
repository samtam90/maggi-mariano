import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lodi",
  canonical: links.servizi["trasporto-rifiuti"]["lodi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lodi", 
    locationNames: {label: "Lodi", href: "lodi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["lodi"],
      name: "Lodi",
  }),
});
