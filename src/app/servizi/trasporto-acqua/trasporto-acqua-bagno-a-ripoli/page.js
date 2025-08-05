import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Bagno a Ripoli",
  canonical: links.servizi["trasporto-acqua"]["bagno-a-ripoli"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bagno a Ripoli", 
    locationNames: {label: "Bagno a Ripoli", href: "bagno-a-ripoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
