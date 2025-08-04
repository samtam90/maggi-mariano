import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Taranto",
  canonical: links.servizi["trasporto-rifiuti"]["taranto"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});