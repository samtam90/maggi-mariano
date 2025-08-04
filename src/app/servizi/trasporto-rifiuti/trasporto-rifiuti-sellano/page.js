import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sellano",
  canonical: links.servizi["trasporto-rifiuti"]["sellano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sellano", 
    locationNames: {label: "Sellano", href: "sellano"}  
});