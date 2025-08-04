import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monte San Savino",
  canonical: links.servizi["trasporto-rifiuti"]["monte-san-savino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"}  
});