import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Oristano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["oristano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});
