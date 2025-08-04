import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lucignano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["lucignano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"}  
});
