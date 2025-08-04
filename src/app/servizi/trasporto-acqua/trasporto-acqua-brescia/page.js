import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Brescia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Brescia", 
    locationNames: {label: "Brescia", href: "brescia"}  
});