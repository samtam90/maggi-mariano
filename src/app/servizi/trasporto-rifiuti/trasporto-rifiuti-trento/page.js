import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trento",
  canonical: links.servizi["trasporto-rifiuti"]["trento"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trento", 
    locationNames: {label: "Trento", href: "trento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["trento"],
      name: "Trento",
  }),
});
