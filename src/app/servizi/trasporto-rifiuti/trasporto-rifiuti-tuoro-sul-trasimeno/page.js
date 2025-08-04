import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Tuoro sul Trasimeno",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Tuoro sul Trasimeno", 
    locationNames: {label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno"}  
});