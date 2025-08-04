import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Foggia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});