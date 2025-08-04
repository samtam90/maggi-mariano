import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castiglion Fiorentino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castiglion-fiorentino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});
