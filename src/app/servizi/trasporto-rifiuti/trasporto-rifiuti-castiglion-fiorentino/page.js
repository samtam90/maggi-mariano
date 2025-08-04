import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castiglion Fiorentino",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});