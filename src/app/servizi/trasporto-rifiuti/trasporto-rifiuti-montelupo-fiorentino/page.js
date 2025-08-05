import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montelupo Fiorentino",
  canonical: links.servizi["trasporto-rifiuti"]["montelupo-fiorentino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
