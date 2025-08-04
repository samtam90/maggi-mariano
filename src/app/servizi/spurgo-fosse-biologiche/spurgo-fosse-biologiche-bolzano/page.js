import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bolzano",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"}  
});
