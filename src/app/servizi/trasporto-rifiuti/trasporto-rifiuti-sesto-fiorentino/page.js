import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sesto Fiorentino",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sesto Fiorentino", 
    locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"}  
});