import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cortona",
  canonical: links.servizi["trasporto-rifiuti"]["cortona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cortona", 
    locationNames: {label: "Cortona", href: "cortona"}  
});