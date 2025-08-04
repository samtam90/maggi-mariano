import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Borgo San Lorenzo",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Borgo San Lorenzo", 
    locationNames: {label: "Borgo San Lorenzo", href: "borgo-san-lorenzo"}  
});
