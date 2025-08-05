import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cuneo",
  canonical: links.servizi["trasporto-rifiuti"]["cuneo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["cuneo"],
      name: "Cuneo",
  }),
});
