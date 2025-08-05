import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Verona",
  canonical: links.servizi["trasporto-rifiuti"]["verona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Verona", 
    locationNames: {label: "Verona", href: "verona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["verona"],
      name: "Verona",
  }),
});
