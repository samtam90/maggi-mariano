import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Greve in Chianti",
  canonical: links.servizi["trasporto-rifiuti"]["greve-in-chianti"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Greve in Chianti", 
    locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
