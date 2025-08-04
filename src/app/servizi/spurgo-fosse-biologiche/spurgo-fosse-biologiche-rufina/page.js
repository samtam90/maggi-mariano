import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rufina",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});
