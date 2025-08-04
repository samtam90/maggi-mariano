import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Norcia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["norcia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Norcia", 
    locationNames: {label: "Norcia", href: "norcia"}  
});
