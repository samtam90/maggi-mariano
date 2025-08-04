import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Montelupo Fiorentino",
  canonical: links.servizi["trasporto-acqua"]["montelupo-fiorentino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"}  
});