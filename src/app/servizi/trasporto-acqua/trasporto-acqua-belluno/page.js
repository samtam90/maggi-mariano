import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Belluno",
  canonical: links.servizi["trasporto-acqua"]["belluno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Belluno", 
    locationNames: {label: "Belluno", href: "belluno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["belluno"],
      name: "Belluno",
  }),
});
