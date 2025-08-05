import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Allerona",
  canonical: links.servizi["trasporto-rifiuti"]["allerona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Allerona", 
    locationNames: {label: "Allerona", href: "allerona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
