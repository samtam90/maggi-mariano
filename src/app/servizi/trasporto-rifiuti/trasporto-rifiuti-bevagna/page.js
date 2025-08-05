import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bevagna",
  canonical: links.servizi["trasporto-rifiuti"]["bevagna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bevagna", 
    locationNames: {label: "Bevagna", href: "bevagna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
