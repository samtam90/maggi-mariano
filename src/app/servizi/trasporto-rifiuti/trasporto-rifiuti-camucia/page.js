import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Camucia",
  canonical: links.servizi["trasporto-rifiuti"]["camucia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Camucia", 
    locationNames: {label: "Camucia", href: "camucia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
