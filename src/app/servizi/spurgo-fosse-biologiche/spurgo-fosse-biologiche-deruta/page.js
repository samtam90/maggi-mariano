import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Deruta",
  canonical: links.servizi["spurgo-fosse-biologiche"]["deruta"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Deruta", 
    locationNames: {label: "Deruta", href: "deruta"}  
});
