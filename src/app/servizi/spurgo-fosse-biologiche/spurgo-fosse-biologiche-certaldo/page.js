import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Certaldo",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});
