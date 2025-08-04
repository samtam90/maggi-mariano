import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Viterbo",
  canonical: links.servizi["trasporto-acqua"]["viterbo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"}  
});