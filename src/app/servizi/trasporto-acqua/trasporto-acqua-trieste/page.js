import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Trieste",
});
export default withBaseProps({ 
    title: "Trasporto acqua Trieste", 
    locationNames: {label: "Trieste", href: "trieste"}  
});