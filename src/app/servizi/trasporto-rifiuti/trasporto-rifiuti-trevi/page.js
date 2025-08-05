import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trevi",
  canonical: links.servizi["trasporto-rifiuti"]["trevi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trevi", 
    locationNames: {label: "Trevi", href: "trevi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
