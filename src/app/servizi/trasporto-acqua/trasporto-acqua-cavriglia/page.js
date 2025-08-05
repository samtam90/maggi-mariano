import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Cavriglia",
  canonical: links.servizi["trasporto-acqua"]["cavriglia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cavriglia", 
    locationNames: {label: "Cavriglia", href: "cavriglia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
