import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Reggio Emilia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["reggio-emilia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});
