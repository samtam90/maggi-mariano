import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Capolona",
  canonical: links.servizi["trasporto-rifiuti"]["capolona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Capolona", 
    locationNames: {label: "Capolona", href: "capolona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
