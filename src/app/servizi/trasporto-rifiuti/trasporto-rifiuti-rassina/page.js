import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rassina",
  canonical: links.servizi["trasporto-rifiuti"]["rassina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rassina", 
    locationNames: {label: "Rassina", href: "rassina"}  
});