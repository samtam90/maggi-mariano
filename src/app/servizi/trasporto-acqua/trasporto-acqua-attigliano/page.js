import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Attigliano",
  canonical: links.servizi["trasporto-acqua"]["attigliano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Attigliano", 
    locationNames: {label: "Attigliano", href: "attigliano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
