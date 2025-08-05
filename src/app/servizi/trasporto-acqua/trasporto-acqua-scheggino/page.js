import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Scheggino",
  canonical: links.servizi["trasporto-acqua"]["scheggino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
