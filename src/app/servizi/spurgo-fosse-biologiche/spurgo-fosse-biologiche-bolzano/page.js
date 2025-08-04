import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bolzano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bolzano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"}  
});
