import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ferrara",
  canonical: links.servizi["trasporto-rifiuti"]["ferrara"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["ferrara"],
      name: "Ferrara",
  }),
});
