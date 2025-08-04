import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Capraia e Limite",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Capraia e Limite", 
    locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"}  
});