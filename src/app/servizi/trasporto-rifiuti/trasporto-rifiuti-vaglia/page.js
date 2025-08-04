import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vaglia",
  canonical: links.servizi["trasporto-rifiuti"]["vaglia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vaglia", 
    locationNames: {label: "Vaglia", href: "vaglia"}  
});