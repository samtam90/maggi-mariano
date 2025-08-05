import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Asti",
  canonical: links.servizi["trasporto-rifiuti"]["asti"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Asti", 
    locationNames: {label: "Asti", href: "asti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["asti"],
      name: "Asti",
  }),
});
