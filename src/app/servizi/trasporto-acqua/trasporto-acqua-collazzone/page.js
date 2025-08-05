import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Collazzone",
  canonical: links.servizi["trasporto-acqua"]["collazzone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
