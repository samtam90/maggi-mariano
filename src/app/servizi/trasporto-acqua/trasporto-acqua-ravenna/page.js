import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Ravenna",
});
export default withBaseProps({ 
    title: "Trasporto acqua Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"}  
});