import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sestino",
  canonical: links.servizi["trasporto-rifiuti"]["sestino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sestino", 
    locationNames: {label: "Sestino", href: "sestino"}  
});