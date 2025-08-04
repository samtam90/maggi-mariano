import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castiglion Fiorentino",
  canonical: links.servizi["trasporto-rifiuti"]["castiglion-fiorentino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});