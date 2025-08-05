import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Passignano sul Trasimeno",
  canonical: links.servizi["trasporto-rifiuti"]["passignano-sul-trasimeno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Passignano sul Trasimeno", 
    locationNames: {label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
