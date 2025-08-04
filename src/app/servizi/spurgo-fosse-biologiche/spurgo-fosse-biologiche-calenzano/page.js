import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Calenzano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["calenzano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});
