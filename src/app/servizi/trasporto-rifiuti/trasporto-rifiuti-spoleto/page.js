import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Spoleto",
  canonical: links.servizi["trasporto-rifiuti"]["spoleto"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
