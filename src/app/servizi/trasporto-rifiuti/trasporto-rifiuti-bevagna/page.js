import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bevagna",
  canonical: links.servizi["trasporto-rifiuti"]["bevagna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bevagna", 
    locationNames: {label: "Bevagna", href: "bevagna"}  
});