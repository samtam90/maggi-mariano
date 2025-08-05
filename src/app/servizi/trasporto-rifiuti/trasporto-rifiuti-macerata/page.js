import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Macerata",
  canonical: links.servizi["trasporto-rifiuti"]["macerata"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Macerata", 
    locationNames: {label: "Macerata", href: "macerata"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["macerata"],
      name: "Macerata",
  }),
});
