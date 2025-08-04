import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ragusa",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ragusa"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"}  
});
