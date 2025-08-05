import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Genova",
  canonical: links.servizi["trasporto-rifiuti"]["genova"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Genova", 
    locationNames: {label: "Genova", href: "genova"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["genova"],
      name: "Genova",
  }),
});
