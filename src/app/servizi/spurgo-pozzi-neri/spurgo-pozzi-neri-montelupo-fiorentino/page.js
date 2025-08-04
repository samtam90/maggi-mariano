import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montelupo Fiorentino",
  canonical: links.servizi["spurgo-pozzi-neri"]["montelupo-fiorentino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"}  
});