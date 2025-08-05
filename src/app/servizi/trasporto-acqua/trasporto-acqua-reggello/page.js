import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Reggello",
  canonical: links.servizi["trasporto-acqua"]["reggello"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Reggello", 
    locationNames: {label: "Reggello", href: "reggello"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
