import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gorizia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["gorizia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"}  
});
