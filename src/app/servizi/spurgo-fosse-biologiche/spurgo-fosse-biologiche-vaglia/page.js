import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vaglia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["vaglia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vaglia", 
    locationNames: {label: "Vaglia", href: "vaglia"}  
});
