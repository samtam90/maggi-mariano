import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bucine",
  canonical: links.servizi["trasporto-rifiuti"]["bucine"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bucine", 
    locationNames: {label: "Bucine", href: "bucine"}  
});