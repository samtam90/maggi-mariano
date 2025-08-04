import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Lecco",
});
export default withBaseProps({ 
    title: "Trasporto acqua Lecco", 
    locationNames: {label: "Lecco", href: "lecco"}  
});