import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Valtopina",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"}  
});
