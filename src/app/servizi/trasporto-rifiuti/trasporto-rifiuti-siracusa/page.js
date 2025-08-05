import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Siracusa",
  canonical: links.servizi["trasporto-rifiuti"]["siracusa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Siracusa", 
    locationNames: {label: "Siracusa", href: "siracusa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siracusa"],
      name: "Siracusa",
  }),
});
