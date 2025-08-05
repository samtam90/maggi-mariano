import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Reggio Emilia",
  canonical: links.servizi["trasporto-rifiuti"]["reggio-emilia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["reggio-emilia"],
      name: "Reggio Emilia",
  }),
});
