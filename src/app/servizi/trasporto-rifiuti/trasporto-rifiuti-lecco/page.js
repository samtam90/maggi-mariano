import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lecco",
  canonical: links.servizi["trasporto-rifiuti"]["lecco"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lecco", 
    locationNames: {label: "Lecco", href: "lecco"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["lecco"],
      name: "Lecco",
  }),
});
