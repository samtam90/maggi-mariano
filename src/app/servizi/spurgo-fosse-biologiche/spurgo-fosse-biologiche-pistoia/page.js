import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pistoia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pistoia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"}  
});
