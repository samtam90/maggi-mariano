import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti [name]",
  canonical: links.servizi["trasporto-rifiuti"]["[path]"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti [name]", 
    locationNames: {label: "[name]", href: "[path]"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["[province.path]"],
      name: "[province.name]",
  }),
});
