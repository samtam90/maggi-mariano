import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Medio Campidano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["medio-campidano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"}  
});
