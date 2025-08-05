import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fabro",
  canonical: links.servizi["trasporto-rifiuti"]["fabro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fabro", 
    locationNames: {label: "Fabro", href: "fabro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
