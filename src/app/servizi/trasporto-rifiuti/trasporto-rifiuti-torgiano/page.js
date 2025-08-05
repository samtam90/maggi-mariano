import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Torgiano",
  canonical: links.servizi["trasporto-rifiuti"]["torgiano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Torgiano", 
    locationNames: {label: "Torgiano", href: "torgiano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
