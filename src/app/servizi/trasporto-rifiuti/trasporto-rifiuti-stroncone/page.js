import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Stroncone",
  canonical: links.servizi["trasporto-rifiuti"]["stroncone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Stroncone", 
    locationNames: {label: "Stroncone", href: "stroncone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
