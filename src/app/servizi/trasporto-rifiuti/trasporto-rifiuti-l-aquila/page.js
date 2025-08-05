import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti L'Aquila",
  canonical: links.servizi["trasporto-rifiuti"]["l-aquila"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["l-aquila"],
      name: "L'Aquila",
  }),
});
