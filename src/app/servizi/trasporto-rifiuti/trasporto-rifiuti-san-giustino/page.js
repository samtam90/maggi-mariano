import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti San Giustino",
  canonical: links.servizi["trasporto-rifiuti"]["san-giustino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
