import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montemignaio",
  canonical: links.servizi["trasporto-rifiuti"]["montemignaio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
