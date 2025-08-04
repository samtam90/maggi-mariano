import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montevarchi",
  canonical: links.servizi["trasporto-rifiuti"]["montevarchi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"}  
});