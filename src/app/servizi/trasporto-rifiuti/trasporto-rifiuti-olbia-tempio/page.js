import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Olbia-Tempio",
  canonical: links.servizi["trasporto-rifiuti"]["olbia-tempio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["olbia-tempio"],
      name: "Olbia-Tempio",
  }),
});
