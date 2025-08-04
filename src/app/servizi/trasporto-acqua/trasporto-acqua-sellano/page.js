import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Sellano",
  canonical: links.servizi["trasporto-acqua"]["sellano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sellano", 
    locationNames: {label: "Sellano", href: "sellano"}  
});