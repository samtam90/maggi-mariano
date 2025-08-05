import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Castel Focognano",
  canonical: links.servizi["trasporto-acqua"]["castel-focognano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
