import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Empoli",
  canonical: links.servizi["spurgo-fosse-biologiche"]["empoli"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Empoli", 
    locationNames: {label: "Empoli", href: "empoli"}  
});
