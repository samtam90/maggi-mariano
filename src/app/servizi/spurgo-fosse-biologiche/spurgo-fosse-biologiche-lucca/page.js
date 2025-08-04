import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lucca",
  canonical: links.servizi["spurgo-fosse-biologiche"]["lucca"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lucca", 
    locationNames: {label: "Lucca", href: "lucca"}  
});
