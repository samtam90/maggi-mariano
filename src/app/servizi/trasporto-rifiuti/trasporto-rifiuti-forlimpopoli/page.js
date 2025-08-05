import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Forlimpopoli",
  canonical: links.servizi["trasporto-rifiuti"]["forlimpopoli"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Forlimpopoli", 
    locationNames: {label: "Forlimpopoli", href: "forlimpopoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
