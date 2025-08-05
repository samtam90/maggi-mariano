import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Pavia",
  canonical: links.servizi["trasporto-acqua"]["pavia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pavia", 
    locationNames: {label: "Pavia", href: "pavia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["pavia"],
      name: "Pavia",
  }),
});
