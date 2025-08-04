import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ferrara",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ferrara"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});
