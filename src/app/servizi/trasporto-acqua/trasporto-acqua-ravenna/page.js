import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Ravenna",
  canonical: links.servizi["trasporto-acqua"]["ravenna"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["ravenna"],
      name: "Ravenna",
  }),
});
