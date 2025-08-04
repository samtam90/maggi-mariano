import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gualdo Tadino",
  canonical: links.servizi["trasporto-rifiuti"]["gualdo-tadino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"}  
});