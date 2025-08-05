import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Avigliano Umbro",
  canonical: links.servizi["trasporto-acqua"]["avigliano-umbro"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Avigliano Umbro", 
    locationNames: {label: "Avigliano Umbro", href: "avigliano-umbro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
