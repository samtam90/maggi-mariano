import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri L'Aquila",
  canonical: links.servizi["spurgo-pozzi-neri"]["l-aquila"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["l-aquila"],
      name: "L'Aquila",
  }),
});
