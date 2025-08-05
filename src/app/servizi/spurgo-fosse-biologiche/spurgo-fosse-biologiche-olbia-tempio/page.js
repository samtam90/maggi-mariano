import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Olbia-Tempio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["olbia-tempio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["olbia-tempio"],
      name: "Olbia-Tempio",
  }),
});
