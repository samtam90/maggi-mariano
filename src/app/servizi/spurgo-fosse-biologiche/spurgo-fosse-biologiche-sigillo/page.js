import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sigillo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sigillo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});
