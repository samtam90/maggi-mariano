import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Lucignano",
});
export default withBaseProps({ 
    title: "Trasporto acqua Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"}  
});