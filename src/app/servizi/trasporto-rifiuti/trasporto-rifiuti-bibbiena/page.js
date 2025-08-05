import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bibbiena",
  canonical: links.servizi["trasporto-rifiuti"]["bibbiena"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
