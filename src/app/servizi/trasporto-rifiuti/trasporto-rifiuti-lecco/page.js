import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lecco",
  canonical: links.servizi["trasporto-rifiuti"]["lecco"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lecco", 
    locationNames: {label: "Lecco", href: "lecco"}  
});