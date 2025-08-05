import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Fiesole",
  canonical: links.servizi["trasporto-acqua"]["fiesole"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
