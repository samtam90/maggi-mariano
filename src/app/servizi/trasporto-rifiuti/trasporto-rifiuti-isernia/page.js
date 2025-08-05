import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Isernia",
  canonical: links.servizi["trasporto-rifiuti"]["isernia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Isernia", 
    locationNames: {label: "Isernia", href: "isernia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["isernia"],
      name: "Isernia",
  }),
});
