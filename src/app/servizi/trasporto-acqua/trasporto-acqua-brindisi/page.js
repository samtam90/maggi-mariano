import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Brindisi",
  canonical: links.servizi["trasporto-acqua"]["brindisi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["brindisi"],
      name: "Brindisi",
  }),
});
