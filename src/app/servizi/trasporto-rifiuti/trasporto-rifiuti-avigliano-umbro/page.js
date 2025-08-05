import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Avigliano Umbro",
  canonical: links.servizi["trasporto-rifiuti"]["avigliano-umbro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Avigliano Umbro", 
    locationNames: {label: "Avigliano Umbro", href: "avigliano-umbro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
