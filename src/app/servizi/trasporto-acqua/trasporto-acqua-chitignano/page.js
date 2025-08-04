import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Chitignano",
});
export default withBaseProps({ 
    title: "Trasporto acqua Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"}  
});