import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Impruneta",
  canonical: links.servizi["spurgo-fosse-biologiche"]["impruneta"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"}  
});
