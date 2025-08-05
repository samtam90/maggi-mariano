import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Padova",
  canonical: links.servizi["trasporto-rifiuti"]["padova"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Padova", 
    locationNames: {label: "Padova", href: "padova"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["padova"],
      name: "Padova",
  }),
});
