import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Verona",
  canonical: links.servizi["trasporto-rifiuti"]["verona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Verona", 
    locationNames: {label: "Verona", href: "verona"}  
});