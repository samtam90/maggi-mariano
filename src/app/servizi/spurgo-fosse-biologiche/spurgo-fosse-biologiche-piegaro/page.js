import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Piegaro",
  canonical: links.servizi["spurgo-fosse-biologiche"]["piegaro"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"}  
});
