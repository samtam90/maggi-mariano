import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Scandicci",
  canonical: links.servizi["trasporto-acqua"]["scandicci"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
