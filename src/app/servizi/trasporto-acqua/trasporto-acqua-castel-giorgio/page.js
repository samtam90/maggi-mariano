import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Castel Giorgio",
  canonical: links.servizi["trasporto-acqua"]["castel-giorgio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Castel Giorgio", 
    locationNames: {label: "Castel Giorgio", href: "castel-giorgio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
