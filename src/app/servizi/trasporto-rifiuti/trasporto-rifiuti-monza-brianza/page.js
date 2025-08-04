import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monza Brianza",
  canonical: links.servizi["trasporto-rifiuti"]["monza-brianza"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});