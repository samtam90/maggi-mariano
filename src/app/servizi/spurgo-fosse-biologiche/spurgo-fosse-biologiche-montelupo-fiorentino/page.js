import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montelupo Fiorentino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montelupo-fiorentino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"}  
});
