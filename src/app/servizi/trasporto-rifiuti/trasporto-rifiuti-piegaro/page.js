import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Piegaro",
  canonical: links.servizi["trasporto-rifiuti"]["piegaro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"}  
});