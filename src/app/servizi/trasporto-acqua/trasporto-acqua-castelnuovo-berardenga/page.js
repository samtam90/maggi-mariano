import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Castelnuovo Berardenga",
  canonical: links.servizi["trasporto-acqua"]["castelnuovo-berardenga"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Castelnuovo Berardenga", 
    locationNames: {label: "Castelnuovo Berardenga", href: "castelnuovo-berardenga"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
