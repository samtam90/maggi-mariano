import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pietralunga",
  canonical: links.servizi["trasporto-rifiuti"]["pietralunga"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pietralunga", 
    locationNames: {label: "Pietralunga", href: "pietralunga"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
