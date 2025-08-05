import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cavriglia",
  canonical: links.servizi["trasporto-rifiuti"]["cavriglia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cavriglia", 
    locationNames: {label: "Cavriglia", href: "cavriglia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
