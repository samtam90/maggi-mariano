import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Deruta",
  canonical: links.servizi["trasporto-rifiuti"]["deruta"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Deruta", 
    locationNames: {label: "Deruta", href: "deruta"}  
});