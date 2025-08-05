import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Belluno",
  canonical: links.servizi["trasporto-rifiuti"]["belluno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Belluno", 
    locationNames: {label: "Belluno", href: "belluno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["belluno"],
      name: "Belluno",
  }),
});
