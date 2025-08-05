import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Buonconvento",
  canonical: links.servizi["trasporto-acqua"]["buonconvento"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Buonconvento", 
    locationNames: {label: "Buonconvento", href: "buonconvento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
