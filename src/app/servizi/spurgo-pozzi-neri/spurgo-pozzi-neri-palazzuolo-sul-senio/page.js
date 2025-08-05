import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Palazzuolo sul Senio",
  canonical: links.servizi["spurgo-pozzi-neri"]["palazzuolo-sul-senio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Palazzuolo sul Senio", 
    locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
