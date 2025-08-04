import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Citerna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["citerna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Citerna", 
    locationNames: {label: "Citerna", href: "citerna"}  
});
