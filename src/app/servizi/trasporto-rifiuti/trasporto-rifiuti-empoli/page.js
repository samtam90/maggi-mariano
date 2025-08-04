import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Empoli",
  canonical: links.servizi["trasporto-rifiuti"]["empoli"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Empoli", 
    locationNames: {label: "Empoli", href: "empoli"}  
});