import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Piegaro",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"}  
});
