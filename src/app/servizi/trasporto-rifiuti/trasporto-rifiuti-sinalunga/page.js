import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sinalunga",
  canonical: links.servizi["trasporto-rifiuti"]["sinalunga"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sinalunga", 
    locationNames: {label: "Sinalunga", href: "sinalunga"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
