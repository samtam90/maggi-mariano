import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Pisa",
  canonical: links.servizi["trasporto-acqua"]["pisa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pisa", 
    locationNames: {label: "Pisa", href: "pisa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["pisa"],
      name: "Pisa",
  }),
});
