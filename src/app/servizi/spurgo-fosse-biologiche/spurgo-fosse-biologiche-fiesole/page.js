import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Fiesole",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});
