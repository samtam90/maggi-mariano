import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Taranto",
  canonical: links.servizi["trasporto-rifiuti"]["taranto"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Taranto", 
    locationNames: {label: "Taranto", href: "taranto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["taranto"],
      name: "Taranto",
  }),
});
