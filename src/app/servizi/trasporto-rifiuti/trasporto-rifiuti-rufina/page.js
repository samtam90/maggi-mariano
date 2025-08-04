import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rufina",
  canonical: links.servizi["trasporto-rifiuti"]["rufina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});