import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Parrano",
  canonical: links.servizi["trasporto-rifiuti"]["parrano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Parrano", 
    locationNames: {label: "Parrano", href: "parrano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
