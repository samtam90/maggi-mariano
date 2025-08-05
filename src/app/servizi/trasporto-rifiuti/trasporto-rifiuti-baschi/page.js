import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Baschi",
  canonical: links.servizi["trasporto-rifiuti"]["baschi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Baschi", 
    locationNames: {label: "Baschi", href: "baschi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
