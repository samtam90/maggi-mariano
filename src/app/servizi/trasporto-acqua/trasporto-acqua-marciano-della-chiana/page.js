import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Marciano della Chiana",
});
export default withBaseProps({ 
    title: "Trasporto acqua Marciano della Chiana", 
    locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"}  
});