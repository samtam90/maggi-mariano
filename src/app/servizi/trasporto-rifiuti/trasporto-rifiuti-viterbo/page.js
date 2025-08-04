import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Viterbo",
  canonical: links.servizi["trasporto-rifiuti"]["viterbo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"}  
});