import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Trento",
  canonical: links.servizi["trasporto-acqua"]["trento"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Trento", 
    locationNames: {label: "Trento", href: "trento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["trento"],
      name: "Trento",
  }),
});
