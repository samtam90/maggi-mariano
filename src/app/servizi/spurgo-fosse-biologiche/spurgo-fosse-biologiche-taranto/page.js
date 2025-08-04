import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Taranto",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});
