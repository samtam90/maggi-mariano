import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vallo di Nera",
  canonical: links.servizi["spurgo-fosse-biologiche"]["vallo-di-nera"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"}  
});
