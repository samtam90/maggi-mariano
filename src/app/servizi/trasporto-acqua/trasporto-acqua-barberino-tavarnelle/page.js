import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Barberino Tavarnelle",
  canonical: links.servizi["trasporto-acqua"]["barberino-tavarnelle"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
