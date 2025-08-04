import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Reggio Emilia",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});
