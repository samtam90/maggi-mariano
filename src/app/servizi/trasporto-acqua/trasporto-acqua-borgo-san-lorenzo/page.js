import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Borgo San Lorenzo",
});
export default withBaseProps({ 
    title: "Trasporto acqua Borgo San Lorenzo", 
    locationNames: {label: "Borgo San Lorenzo", href: "borgo-san-lorenzo"}  
});