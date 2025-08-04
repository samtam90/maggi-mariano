import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montevarchi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montevarchi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"}  
});
