import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Montone",
});
export default withBaseProps({ 
    title: "Trasporto acqua Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});