import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Foiano della Chiana",
  canonical: links.servizi["spurgo-fosse-biologiche"]["foiano-della-chiana"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Foiano della Chiana", 
    locationNames: {label: "Foiano della Chiana", href: "foiano-della-chiana"}  
});
