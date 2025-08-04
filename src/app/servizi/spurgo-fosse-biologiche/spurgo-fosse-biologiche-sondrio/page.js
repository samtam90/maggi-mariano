import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sondrio",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"}  
});
