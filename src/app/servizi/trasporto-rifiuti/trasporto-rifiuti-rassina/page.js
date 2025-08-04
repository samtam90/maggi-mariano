import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rassina",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rassina", 
    locationNames: {label: "Rassina", href: "rassina"}  
});