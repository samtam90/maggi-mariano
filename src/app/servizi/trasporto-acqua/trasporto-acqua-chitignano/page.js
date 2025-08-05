import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Chitignano",
  canonical: links.servizi["trasporto-acqua"]["chitignano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
