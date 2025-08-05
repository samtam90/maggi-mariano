import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Latina",
  canonical: links.servizi["trasporto-rifiuti"]["latina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Latina", 
    locationNames: {label: "Latina", href: "latina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["latina"],
      name: "Latina",
  }),
});
