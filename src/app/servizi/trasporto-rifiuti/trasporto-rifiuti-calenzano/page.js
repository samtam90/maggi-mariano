import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Calenzano",
  canonical: links.servizi["trasporto-rifiuti"]["calenzano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});