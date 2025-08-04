import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lecce",
  canonical: links.servizi["trasporto-rifiuti"]["lecce"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});