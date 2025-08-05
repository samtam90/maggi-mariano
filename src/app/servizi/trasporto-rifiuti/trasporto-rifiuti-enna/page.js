import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Enna",
  canonical: links.servizi["trasporto-rifiuti"]["enna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Enna", 
    locationNames: {label: "Enna", href: "enna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["enna"],
      name: "Enna",
  }),
});
