import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Alessandria",
  canonical: links.servizi["trasporto-rifiuti"]["alessandria"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Alessandria", 
    locationNames: {label: "Alessandria", href: "alessandria"}  
});