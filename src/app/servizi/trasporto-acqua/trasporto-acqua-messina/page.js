import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Messina",
  canonical: links.servizi["trasporto-acqua"]["messina"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Messina", 
    locationNames: {label: "Messina", href: "messina"}  
});