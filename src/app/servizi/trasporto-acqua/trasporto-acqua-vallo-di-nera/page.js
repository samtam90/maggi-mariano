import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Vallo di Nera",
});
export default withBaseProps({ 
    title: "Trasporto acqua Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"}  
});