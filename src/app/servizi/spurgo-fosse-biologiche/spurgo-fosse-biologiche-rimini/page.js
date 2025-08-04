import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rimini",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rimini", 
    locationNames: {label: "Rimini", href: "rimini"}  
});
