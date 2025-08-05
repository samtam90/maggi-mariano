import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Figline e Incisa Valdarno",
  canonical: links.servizi["spurgo-pozzi-neri"]["figline-e-incisa-valdarno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Figline e Incisa Valdarno", 
    locationNames: {label: "Figline e Incisa Valdarno", href: "figline-e-incisa-valdarno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
