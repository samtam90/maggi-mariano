import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Assisi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["assisi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});
