import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Assisi",
});
export default withBaseProps({ 
    title: "Trasporto acqua Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});