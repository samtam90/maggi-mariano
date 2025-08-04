import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Viterbo",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Viterbo", 
    locationNames: {label: "Viterbo", href: "viterbo"}  
});