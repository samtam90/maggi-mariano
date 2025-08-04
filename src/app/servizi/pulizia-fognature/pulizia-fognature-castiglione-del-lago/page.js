import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Castiglione del Lago",
  canonical: links.servizi["pulizia-fognature"]["castiglione-del-lago"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Castiglione del Lago", 
    locationNames: {label: "Castiglione del Lago", href: "castiglione-del-lago"}  
});
