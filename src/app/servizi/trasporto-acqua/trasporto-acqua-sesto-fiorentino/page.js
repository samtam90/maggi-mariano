import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Sesto Fiorentino",
});
export default withBaseProps({ 
    title: "Trasporto acqua Sesto Fiorentino", 
    locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"}  
});