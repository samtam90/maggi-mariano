import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Piacenza",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"}  
});
