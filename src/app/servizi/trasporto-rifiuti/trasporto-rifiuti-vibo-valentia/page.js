import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vibo Valentia",
  canonical: links.servizi["trasporto-rifiuti"]["vibo-valentia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["vibo-valentia"],
      name: "Vibo Valentia",
  }),
});
