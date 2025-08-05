import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castel Focognano",
  canonical: links.servizi["trasporto-rifiuti"]["castel-focognano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
