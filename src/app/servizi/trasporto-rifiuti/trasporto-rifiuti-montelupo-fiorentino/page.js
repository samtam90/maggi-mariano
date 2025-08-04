import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montelupo Fiorentino",
  canonical: links.servizi["trasporto-rifiuti"]["montelupo-fiorentino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"}  
});