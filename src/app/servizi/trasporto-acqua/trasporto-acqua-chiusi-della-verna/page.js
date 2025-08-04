import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Chiusi della Verna",
});
export default withBaseProps({ 
    title: "Trasporto acqua Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"}  
});