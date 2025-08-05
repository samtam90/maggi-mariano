import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montecastrilli",
  canonical: links.servizi["trasporto-rifiuti"]["montecastrilli"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montecastrilli", 
    locationNames: {label: "Montecastrilli", href: "montecastrilli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
