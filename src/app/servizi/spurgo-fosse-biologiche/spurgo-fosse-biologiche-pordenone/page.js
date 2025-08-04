import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pordenone",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pordenone"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"}  
});
