import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Scandicci",
  canonical: links.servizi["trasporto-rifiuti"]["scandicci"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"}  
});