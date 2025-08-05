import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Acquasparta",
  canonical: links.servizi["trasporto-rifiuti"]["acquasparta"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Acquasparta", 
    locationNames: {label: "Acquasparta", href: "acquasparta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
