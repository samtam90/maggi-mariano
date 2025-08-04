import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Oristano",
  canonical: links.servizi["trasporto-rifiuti"]["oristano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});