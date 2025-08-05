import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pergine Valdarno",
  canonical: links.servizi["spurgo-pozzi-neri"]["pergine-valdarno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
