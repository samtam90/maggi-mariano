import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Novara",
});
export default withBaseProps({ 
    title: "Trasporto acqua Novara", 
    locationNames: {label: "Novara", href: "novara"}  
});