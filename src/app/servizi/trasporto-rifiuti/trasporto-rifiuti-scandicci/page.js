import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Scandicci",
  canonical: links.servizi["trasporto-rifiuti"]["scandicci"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
