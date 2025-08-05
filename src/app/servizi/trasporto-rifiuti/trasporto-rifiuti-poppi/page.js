import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Poppi",
  canonical: links.servizi["trasporto-rifiuti"]["poppi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Poppi", 
    locationNames: {label: "Poppi", href: "poppi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
