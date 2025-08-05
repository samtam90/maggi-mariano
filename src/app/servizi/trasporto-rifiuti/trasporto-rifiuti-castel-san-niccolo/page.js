import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castel San Niccolò",
  canonical: links.servizi["trasporto-rifiuti"]["castel-san-niccolo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castel San Niccolò", 
    locationNames: {label: "Castel San Niccolò", href: "castel-san-niccolo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
