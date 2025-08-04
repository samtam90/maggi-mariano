import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Taranto",
  canonical: links.servizi["spurgo-fosse-biologiche"]["taranto"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});
