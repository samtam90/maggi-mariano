import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lecce",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});
