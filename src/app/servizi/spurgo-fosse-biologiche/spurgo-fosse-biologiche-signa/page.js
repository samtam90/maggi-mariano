import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Signa",
  canonical: links.servizi["spurgo-fosse-biologiche"]["signa"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Signa", 
    locationNames: {label: "Signa", href: "signa"}  
});
