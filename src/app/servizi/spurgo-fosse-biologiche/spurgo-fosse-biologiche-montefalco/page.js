import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montefalco",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"}  
});
