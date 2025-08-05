import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cerreto di Spoleto",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cerreto-di-spoleto"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
