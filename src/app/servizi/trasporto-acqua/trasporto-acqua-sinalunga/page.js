import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Sinalunga",
  canonical: links.servizi["trasporto-acqua"]["sinalunga"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sinalunga", 
    locationNames: {label: "Sinalunga", href: "sinalunga"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
