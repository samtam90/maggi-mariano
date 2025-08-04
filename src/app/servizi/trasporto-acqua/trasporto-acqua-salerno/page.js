import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Salerno",
});
export default withBaseProps({ 
    title: "Trasporto acqua Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});