import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Borgo San Lorenzo",
  canonical: links.servizi["trasporto-rifiuti"]["borgo-san-lorenzo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Borgo San Lorenzo", 
    locationNames: {label: "Borgo San Lorenzo", href: "borgo-san-lorenzo"}  
});