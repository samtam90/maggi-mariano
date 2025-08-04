import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bevagna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bevagna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bevagna", 
    locationNames: {label: "Bevagna", href: "bevagna"}  
});
