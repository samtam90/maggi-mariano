import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Vinci",
  canonical: links.servizi["trasporto-acqua"]["vinci"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Vinci", 
    locationNames: {label: "Vinci", href: "vinci"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
