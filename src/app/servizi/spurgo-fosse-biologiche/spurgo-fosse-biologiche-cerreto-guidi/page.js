import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cerreto Guidi",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cerreto Guidi", 
    locationNames: {label: "Cerreto Guidi", href: "cerreto-guidi"}  
});
