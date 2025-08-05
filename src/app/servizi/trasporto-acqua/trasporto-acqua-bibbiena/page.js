import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Bibbiena",
  canonical: links.servizi["trasporto-acqua"]["bibbiena"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
