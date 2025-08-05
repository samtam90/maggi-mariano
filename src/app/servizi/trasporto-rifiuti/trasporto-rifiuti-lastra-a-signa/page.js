import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lastra a Signa",
  canonical: links.servizi["trasporto-rifiuti"]["lastra-a-signa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lastra a Signa", 
    locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
