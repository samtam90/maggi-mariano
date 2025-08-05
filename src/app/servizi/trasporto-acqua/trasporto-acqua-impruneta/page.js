import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Impruneta",
  canonical: links.servizi["trasporto-acqua"]["impruneta"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
