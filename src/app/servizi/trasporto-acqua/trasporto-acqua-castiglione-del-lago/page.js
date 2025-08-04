import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Castiglione del Lago",
  canonical: links.servizi["trasporto-acqua"]["castiglione-del-lago"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Castiglione del Lago", 
    locationNames: {label: "Castiglione del Lago", href: "castiglione-del-lago"}  
});