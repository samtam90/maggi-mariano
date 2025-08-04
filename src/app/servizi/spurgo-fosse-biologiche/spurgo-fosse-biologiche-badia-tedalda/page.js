import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Badia Tedalda",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"}  
});
