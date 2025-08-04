import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Subbiano",
  canonical: links.servizi["trasporto-rifiuti"]["subbiano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"}  
});