import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cesa in valdichiana",
  canonical: links.servizi["trasporto-rifiuti"]["cesa-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cesa in valdichiana", 
    locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"}  
});