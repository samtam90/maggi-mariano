import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Camucia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["camucia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Camucia", 
    locationNames: {label: "Camucia", href: "camucia"}  
});
