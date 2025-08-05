import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Arezzo",
  canonical: links.servizi["trasporto-rifiuti"]["arezzo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Arezzo", 
    locationNames: {label: "Arezzo", href: "arezzo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
