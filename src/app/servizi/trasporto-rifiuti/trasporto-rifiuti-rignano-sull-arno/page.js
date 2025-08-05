import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rignano sull'Arno",
  canonical: links.servizi["trasporto-rifiuti"]["rignano-sull-arno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rignano sull'Arno", 
    locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
