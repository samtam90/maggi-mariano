import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bagno a Ripoli",
  canonical: links.servizi["trasporto-rifiuti"]["bagno-a-ripoli"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bagno a Ripoli", 
    locationNames: {label: "Bagno a Ripoli", href: "bagno-a-ripoli"}  
});