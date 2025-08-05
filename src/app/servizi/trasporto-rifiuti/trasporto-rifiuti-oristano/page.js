import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Oristano",
  canonical: links.servizi["trasporto-rifiuti"]["oristano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Oristano", 
    locationNames: {label: "Oristano", href: "oristano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["oristano"],
      name: "Oristano",
  }),
});
