import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sellano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sellano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sellano", 
    locationNames: {label: "Sellano", href: "sellano"}  
});
