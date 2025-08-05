import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Reggio Calabria",
  canonical: links.servizi["trasporto-rifiuti"]["reggio-calabria"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Reggio Calabria", 
    locationNames: {label: "Reggio Calabria", href: "reggio-calabria"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["reggio-calabria"],
      name: "Reggio Calabria",
  }),
});
