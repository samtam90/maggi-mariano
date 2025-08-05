import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Padova",
  canonical: links.servizi["trasporto-acqua"]["padova"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Padova", 
    locationNames: {label: "Padova", href: "padova"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["padova"],
      name: "Padova",
  }),
});
