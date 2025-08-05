import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Badia Prataglia",
  canonical: links.servizi["trasporto-acqua"]["badia-prataglia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
