import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monte Santa Maria Tiberina",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monte Santa Maria Tiberina", 
    locationNames: {label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina"}  
});