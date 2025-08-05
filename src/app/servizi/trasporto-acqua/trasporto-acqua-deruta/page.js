import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Deruta",
  canonical: links.servizi["trasporto-acqua"]["deruta"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Deruta", 
    locationNames: {label: "Deruta", href: "deruta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
