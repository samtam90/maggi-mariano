import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Signa",
  canonical: links.servizi["trasporto-rifiuti"]["signa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Signa", 
    locationNames: {label: "Signa", href: "signa"}  
});