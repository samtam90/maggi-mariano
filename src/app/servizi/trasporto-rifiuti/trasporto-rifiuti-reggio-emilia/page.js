import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Reggio Emilia",
  canonical: links.servizi["trasporto-rifiuti"]["reggio-emilia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});