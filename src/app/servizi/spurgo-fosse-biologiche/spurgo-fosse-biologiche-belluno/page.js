import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Belluno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["belluno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});
