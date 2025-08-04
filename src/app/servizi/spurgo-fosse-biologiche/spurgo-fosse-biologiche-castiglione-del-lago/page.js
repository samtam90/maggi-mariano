import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castiglione del Lago",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castiglione-del-lago"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castiglione del Lago", 
    locationNames: {label: "Castiglione del Lago", href: "castiglione-del-lago"}  
});
