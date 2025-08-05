import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Caserta",
  canonical: links.servizi["trasporto-rifiuti"]["caserta"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Caserta", 
    locationNames: {label: "Caserta", href: "caserta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["caserta"],
      name: "Caserta",
  }),
});
