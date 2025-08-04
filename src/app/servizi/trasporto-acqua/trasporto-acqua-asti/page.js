import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Asti",
});
export default withBaseProps({ 
    title: "Trasporto acqua Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});