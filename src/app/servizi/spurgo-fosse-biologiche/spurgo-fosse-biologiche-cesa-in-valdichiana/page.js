import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cesa in valdichiana",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cesa-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cesa in valdichiana", 
    locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"}  
});
