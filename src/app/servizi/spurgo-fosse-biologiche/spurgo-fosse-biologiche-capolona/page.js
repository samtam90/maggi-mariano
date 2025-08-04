import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Capolona",
  canonical: links.servizi["spurgo-fosse-biologiche"]["capolona"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Capolona", 
    locationNames: {label: "Capolona", href: "capolona"}  
});
