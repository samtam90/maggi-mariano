import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti San Venanzo",
  canonical: links.servizi["trasporto-rifiuti"]["san-venanzo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti San Venanzo", 
    locationNames: {label: "San Venanzo", href: "san-venanzo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
