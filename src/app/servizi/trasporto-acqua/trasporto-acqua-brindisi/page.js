import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Brindisi",
});
export default withBaseProps({ 
    title: "Trasporto acqua Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});