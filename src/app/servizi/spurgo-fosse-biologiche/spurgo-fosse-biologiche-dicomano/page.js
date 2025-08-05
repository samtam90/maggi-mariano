import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Dicomano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["dicomano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
