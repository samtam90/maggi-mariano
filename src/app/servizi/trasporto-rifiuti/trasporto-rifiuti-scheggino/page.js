import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Scheggino",
  canonical: links.servizi["trasporto-rifiuti"]["scheggino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
