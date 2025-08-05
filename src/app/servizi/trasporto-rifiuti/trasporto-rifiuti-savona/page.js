import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Savona",
  canonical: links.servizi["trasporto-rifiuti"]["savona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Savona", 
    locationNames: {label: "Savona", href: "savona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["savona"],
      name: "Savona",
  }),
});
