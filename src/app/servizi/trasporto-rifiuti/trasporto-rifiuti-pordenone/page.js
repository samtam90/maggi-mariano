import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pordenone",
  canonical: links.servizi["trasporto-rifiuti"]["pordenone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["pordenone"],
      name: "Pordenone",
  }),
});
