import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Pordenone",
  canonical: links.servizi["trasporto-acqua"]["pordenone"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["pordenone"],
      name: "Pordenone",
  }),
});
