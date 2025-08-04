import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Umbertide",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"}  
});
