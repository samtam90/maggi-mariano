import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Badia Prataglia",
  canonical: links.servizi["trasporto-rifiuti"]["badia-prataglia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
