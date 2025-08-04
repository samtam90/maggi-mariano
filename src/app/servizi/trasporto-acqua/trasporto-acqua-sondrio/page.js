import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Sondrio",
});
export default withBaseProps({ 
    title: "Trasporto acqua Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"}  
});