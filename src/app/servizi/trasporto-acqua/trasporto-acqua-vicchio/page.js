import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Vicchio",
  canonical: links.servizi["trasporto-acqua"]["vicchio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Vicchio", 
    locationNames: {label: "Vicchio", href: "vicchio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
