import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Deruta",
  canonical: links.servizi["trasporto-rifiuti"]["deruta"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Deruta", 
    locationNames: {label: "Deruta", href: "deruta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
