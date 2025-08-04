import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Valtopina",
  canonical: links.servizi["trasporto-acqua"]["valtopina"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"}  
});