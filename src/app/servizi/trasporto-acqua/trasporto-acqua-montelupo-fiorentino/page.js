import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Montelupo Fiorentino",
  canonical: links.servizi["trasporto-acqua"]["montelupo-fiorentino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
