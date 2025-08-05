import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pisa",
  canonical: links.servizi["trasporto-rifiuti"]["pisa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pisa", 
    locationNames: {label: "Pisa", href: "pisa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["pisa"],
      name: "Pisa",
  }),
});
