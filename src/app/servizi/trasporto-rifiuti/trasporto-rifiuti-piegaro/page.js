import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Piegaro",
  canonical: links.servizi["trasporto-rifiuti"]["piegaro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
