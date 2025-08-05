import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Pontassieve",
  canonical: links.servizi["trasporto-acqua"]["pontassieve"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pontassieve", 
    locationNames: {label: "Pontassieve", href: "pontassieve"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
