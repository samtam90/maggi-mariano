import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Chiusi della Verna",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"}  
});