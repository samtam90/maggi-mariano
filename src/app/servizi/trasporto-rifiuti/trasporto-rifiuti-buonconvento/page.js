import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Buonconvento",
  canonical: links.servizi["trasporto-rifiuti"]["buonconvento"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Buonconvento", 
    locationNames: {label: "Buonconvento", href: "buonconvento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
