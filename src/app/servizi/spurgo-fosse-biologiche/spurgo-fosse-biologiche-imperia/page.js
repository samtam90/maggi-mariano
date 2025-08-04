import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Imperia",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Imperia", 
    locationNames: {label: "Imperia", href: "imperia"}  
});
