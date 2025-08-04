import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Capraia e Limite",
});
export default withBaseProps({ 
    title: "Trasporto acqua Capraia e Limite", 
    locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"}  
});