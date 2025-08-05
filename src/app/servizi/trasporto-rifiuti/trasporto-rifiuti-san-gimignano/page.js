import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti San Gimignano",
  canonical: links.servizi["trasporto-rifiuti"]["san-gimignano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti San Gimignano", 
    locationNames: {label: "San Gimignano", href: "san-gimignano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
