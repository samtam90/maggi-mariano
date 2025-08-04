import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Todi",
});
export default withBaseProps({ 
    title: "Trasporto acqua Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});