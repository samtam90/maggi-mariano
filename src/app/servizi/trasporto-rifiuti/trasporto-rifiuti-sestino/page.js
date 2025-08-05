import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sestino",
  canonical: links.servizi["trasporto-rifiuti"]["sestino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sestino", 
    locationNames: {label: "Sestino", href: "sestino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
