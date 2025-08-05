import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Piancastagnaio",
  canonical: links.servizi["trasporto-rifiuti"]["piancastagnaio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Piancastagnaio", 
    locationNames: {label: "Piancastagnaio", href: "piancastagnaio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
