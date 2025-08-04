import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Chiusi della Verna",
  canonical: links.servizi["trasporto-rifiuti"]["chiusi-della-verna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"}  
});