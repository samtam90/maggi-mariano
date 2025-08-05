import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Cesa in valdichiana",
  canonical: links.servizi["trasporto-acqua"]["cesa-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cesa in valdichiana", 
    locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
