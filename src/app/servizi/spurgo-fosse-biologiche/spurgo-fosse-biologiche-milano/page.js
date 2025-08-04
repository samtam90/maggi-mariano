import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Milano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["milano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Milano", 
    locationNames: {label: "Milano", href: "milano"}  
});
