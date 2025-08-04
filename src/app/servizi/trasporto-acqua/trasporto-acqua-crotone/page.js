import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Crotone",
});
export default withBaseProps({ 
    title: "Trasporto acqua Crotone", 
    locationNames: {label: "Crotone", href: "crotone"}  
});