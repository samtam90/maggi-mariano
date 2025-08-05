import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Rigutino",
  canonical: links.servizi["trasporto-acqua"]["rigutino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
