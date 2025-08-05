import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Carbonia Iglesias",
  canonical: links.servizi["trasporto-acqua"]["carbonia-iglesias"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["carbonia-iglesias"],
      name: "Carbonia Iglesias",
  }),
});
