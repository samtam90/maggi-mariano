import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lucca",
  canonical: links.servizi["trasporto-rifiuti"]["lucca"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lucca", 
    locationNames: {label: "Lucca", href: "lucca"}  
});