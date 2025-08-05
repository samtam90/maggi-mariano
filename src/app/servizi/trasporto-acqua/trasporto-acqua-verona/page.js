import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Verona",
  canonical: links.servizi["trasporto-acqua"]["verona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Verona", 
    locationNames: {label: "Verona", href: "verona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["verona"],
      name: "Verona",
  }),
});
