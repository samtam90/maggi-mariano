import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fiesole",
  canonical: links.servizi["trasporto-rifiuti"]["fiesole"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});