import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pistoia",
  canonical: links.servizi["trasporto-rifiuti"]["pistoia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"}  
});