import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Laterina",
  canonical: links.servizi["trasporto-rifiuti"]["laterina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Laterina", 
    locationNames: {label: "Laterina", href: "laterina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
