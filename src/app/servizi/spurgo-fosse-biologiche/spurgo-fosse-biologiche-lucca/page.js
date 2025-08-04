import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lucca",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lucca", 
    locationNames: {label: "Lucca", href: "lucca"}  
});
