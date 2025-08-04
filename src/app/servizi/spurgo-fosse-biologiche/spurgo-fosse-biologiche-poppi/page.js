import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Poppi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["poppi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});
