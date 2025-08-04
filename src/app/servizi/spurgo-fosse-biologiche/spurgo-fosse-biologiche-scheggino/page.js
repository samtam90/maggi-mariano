import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Scheggino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["scheggino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"}  
});
