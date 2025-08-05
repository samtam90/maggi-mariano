import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pavia",
  canonical: links.servizi["trasporto-rifiuti"]["pavia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pavia", 
    locationNames: {label: "Pavia", href: "pavia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["pavia"],
      name: "Pavia",
  }),
});
