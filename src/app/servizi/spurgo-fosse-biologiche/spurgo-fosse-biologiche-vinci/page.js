import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vinci",
  canonical: links.servizi["spurgo-fosse-biologiche"]["vinci"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vinci", 
    locationNames: {label: "Vinci", href: "vinci"}  
});
