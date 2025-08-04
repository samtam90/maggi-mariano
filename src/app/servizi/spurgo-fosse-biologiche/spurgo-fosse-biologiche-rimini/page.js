import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rimini",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rimini"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rimini", 
    locationNames: {label: "Rimini", href: "rimini"}  
});
