import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sondrio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sondrio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"}  
});
