import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sarteano",
  canonical: links.servizi["trasporto-rifiuti"]["sarteano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sarteano", 
    locationNames: {label: "Sarteano", href: "sarteano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
